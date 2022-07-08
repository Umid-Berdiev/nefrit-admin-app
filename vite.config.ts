import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import PurgeIcons from 'vite-plugin-purge-icons'
import ImageMin from 'vite-plugin-imagemin'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'
import purgecss from 'rollup-plugin-purgecss'
// import generateSitemap from 'vite-plugin-pages-sitemap'
// import ViteFonts from 'vite-plugin-fonts'
// import ViteRadar from 'vite-plugin-radar'
// import { imagetools } from 'vite-imagetools'
// import VueroDocumentation from './vite-plugin-vuero-doc/index'

const SILENT = Boolean(process.env.SILENT) ?? false
const SOURCE_MAP = Boolean(process.env.SOURCE_MAP) ?? false
// const SITEMAP_HOST = process.env.SITEMAP_HOST || 'http://localhost:3000/'

/**
 * This is the main configuration file for vitejs
 *
 * @see https://vitejs.dev/config
 */
export default defineConfig({
  // Will be passed to @rollup/plugin-alias as its entries option.
  resolve: {
    alias: [
      {
        find: '/@src/',
        replacement: `/src/`,
      },
    ],
  },
  build: {
    target: 'esnext',
  },
  plugins: [
    /**
     * plugin-vue plugin inject vue library and allow sfc files to work (*.vue)
     *
     * @see https://github.com/vitejs/vite/tree/main/packages/plugin-vue
     */
    Vue({
      include: [/\.vue$/],
    }),

    /**
     * vite-plugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
     *
     * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
     */
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),

    /**
     * vite-plugin-pages plugin generate routes based on file system
     *
     * @see https://github.com/hannoeru/vite-plugin-pages
     */
    Pages({
      pagesDir: [
        {
          dir: 'src/pages',
          baseRoute: '',
        },
      ],
      // onRoutesGenerated: (routes) =>
      //   generateSitemap({
      //     routes,
      //     hostname: SITEMAP_HOST,
      //   }),
    }),

    /**
     * This is an internal vite plugin that load markdown files as vue components.
     *
     * @see /documentation
     * @see /vite-plugin-vuero-doc
     * @see /src/components/partials/documentation/DocumentationItem.vue
     * @see /src/composable/useMarkdownToc.ts
     */
    // VueroDocumentation(),

    /**
     * unplugin-vue-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/unplugin-vue-components
     */
    Components({
      dirs: ['documentation', 'src/components', 'src/layouts'],
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    /**
     * vite-plugin-purge-icons plugin is responsible of autoloading icones from multiples providers
     *
     * @see https://icones.netlify.app/
     * @see https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
     */
    PurgeIcons(),

    /**
     * rollup-plugin-purgecss plugin is responsible of purging css rules
     * that are not used in the bundle
     *
     * @see https://github.com/FullHuman/purgecss/tree/main/packages/rollup-plugin-purgecss
     */
    purgecss({
      content: [`./src/**/*.vue`],
      variables: false,
      safelist: {
        standard: [
          /(autv|lnil|lnir|fas?)/,
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
        ],
      },
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
      },
    }),

    /**
     * vite-plugin-imagemin optimize all images sizes from public or asset folder
     *
     * @see https://github.com/anncwb/vite-plugin-imagemin
     */
    ImageMin({
      verbose: !SILENT,
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 60,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
})
