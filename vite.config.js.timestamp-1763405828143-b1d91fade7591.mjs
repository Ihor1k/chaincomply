// vite.config.js
import legacy from "file:///C:/Users/User/Desktop/vs-code/Chaincomply/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import commonjs from "file:///C:/Users/User/Desktop/vs-code/Chaincomply/node_modules/@rollup/plugin-commonjs/dist/es/index.js";
import compression from "file:///C:/Users/User/Desktop/vs-code/Chaincomply/node_modules/vite-plugin-compression/dist/index.mjs";
import purgecss from "file:///C:/Users/User/Desktop/vs-code/Chaincomply/node_modules/vite-plugin-purgecss/dist/index.mjs";
import image from "file:///C:/Users/User/Desktop/vs-code/Chaincomply/node_modules/@rollup/plugin-image/dist/es/index.js";
import autoprefixer from "file:///C:/Users/User/Desktop/vs-code/Chaincomply/node_modules/autoprefixer/lib/autoprefixer.js";
import postcssPresetEnv from "file:///C:/Users/User/Desktop/vs-code/Chaincomply/node_modules/postcss-preset-env/dist/index.mjs";
import { babel } from "file:///C:/Users/User/Desktop/vs-code/Chaincomply/node_modules/@rollup/plugin-babel/dist/es/index.js";
import { defineConfig } from "file:///C:/Users/User/Desktop/vs-code/Chaincomply/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "C:\\Users\\User\\Desktop\\vs-code\\Chaincomply";
var vite_config_default = defineConfig({
  // root: "src",
  envDir: "../",
  build: {
    outDir: resolve(__vite_injected_original_dirname, "dist"),
    rollupOptions: {
      input: {
        index: "./src/index.html",
        politic: "./src/politic.html"
      }
    },
    emptyOutDir: true
  },
  plugins: [
    legacy({
      targets: [
        "> 1%",
        "last 2 versions",
        "Firefox ESR",
        "not dead",
        "not IE 11"
      ],
      polyfills: [
        "es.symbol",
        "es.array.flat",
        "es.array.flat-map",
        "es.promise",
        "es.promise.finally",
        "es/map",
        "es/set",
        "es/array-buffer"
      ],
      modernPolyfills: true,
      renderLegacyChunks: true,
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
    }),
    compression(),
    commonjs(),
    purgecss(),
    image(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPresetEnv({
          stage: 1
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcdnMtY29kZVxcXFxDaGFpbmNvbXBseVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXHZzLWNvZGVcXFxcQ2hhaW5jb21wbHlcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VzZXIvRGVza3RvcC92cy1jb2RlL0NoYWluY29tcGx5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IGxlZ2FjeSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCI7XG5pbXBvcnQgY29tbW9uanMgZnJvbSBcIkByb2xsdXAvcGx1Z2luLWNvbW1vbmpzXCI7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XG5pbXBvcnQgcHVyZ2Vjc3MgZnJvbSBcInZpdGUtcGx1Z2luLXB1cmdlY3NzXCI7XG5pbXBvcnQgaW1hZ2UgZnJvbSBcIkByb2xsdXAvcGx1Z2luLWltYWdlXCI7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcbmltcG9ydCBwb3N0Y3NzUHJlc2V0RW52IGZyb20gXCJwb3N0Y3NzLXByZXNldC1lbnZcIjtcbmltcG9ydCB7IGJhYmVsIH0gZnJvbSBcIkByb2xsdXAvcGx1Z2luLWJhYmVsXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIHJvb3Q6IFwic3JjXCIsXG4gIGVudkRpcjogXCIuLi9cIixcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IHJlc29sdmUoX19kaXJuYW1lLCBcImRpc3RcIiksXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgaW5kZXg6IFwiLi9zcmMvaW5kZXguaHRtbFwiLFxuICAgICAgICBwb2xpdGljOiBcIi4vc3JjL3BvbGl0aWMuaHRtbFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgbGVnYWN5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgXCI+IDElXCIsXG4gICAgICAgIFwibGFzdCAyIHZlcnNpb25zXCIsXG4gICAgICAgIFwiRmlyZWZveCBFU1JcIixcbiAgICAgICAgXCJub3QgZGVhZFwiLFxuICAgICAgICBcIm5vdCBJRSAxMVwiLFxuICAgICAgXSxcbiAgICAgIHBvbHlmaWxsczogW1xuICAgICAgICBcImVzLnN5bWJvbFwiLFxuICAgICAgICBcImVzLmFycmF5LmZsYXRcIixcbiAgICAgICAgXCJlcy5hcnJheS5mbGF0LW1hcFwiLFxuICAgICAgICBcImVzLnByb21pc2VcIixcbiAgICAgICAgXCJlcy5wcm9taXNlLmZpbmFsbHlcIixcbiAgICAgICAgXCJlcy9tYXBcIixcbiAgICAgICAgXCJlcy9zZXRcIixcbiAgICAgICAgXCJlcy9hcnJheS1idWZmZXJcIixcbiAgICAgIF0sXG4gICAgICBtb2Rlcm5Qb2x5ZmlsbHM6IHRydWUsXG4gICAgICByZW5kZXJMZWdhY3lDaHVua3M6IHRydWUsXG4gICAgICBhZGRpdGlvbmFsTGVnYWN5UG9seWZpbGxzOiBbXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIl0sXG4gICAgfSksXG4gICAgY29tcHJlc3Npb24oKSxcbiAgICBjb21tb25qcygpLFxuICAgIHB1cmdlY3NzKCksXG4gICAgaW1hZ2UoKSxcbiAgICBiYWJlbCh7XG4gICAgICBiYWJlbEhlbHBlcnM6IFwiYnVuZGxlZFwiLFxuICAgICAgcHJlc2V0czogW1wiQGJhYmVsL3ByZXNldC1lbnZcIl0sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICB9LFxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIGF1dG9wcmVmaXhlcigpLFxuICAgICAgICBwb3N0Y3NzUHJlc2V0RW52KHtcbiAgICAgICAgICBzdGFnZTogMSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlULE9BQU8sWUFBWTtBQUM1VSxPQUFPLGNBQWM7QUFDckIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sV0FBVztBQUNsQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLHNCQUFzQjtBQUM3QixTQUFTLGFBQWE7QUFDdEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxlQUFlO0FBVHhCLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUEsRUFFMUIsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLElBQ0wsUUFBUSxRQUFRLGtDQUFXLE1BQU07QUFBQSxJQUNqQyxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxNQUNqQixvQkFBb0I7QUFBQSxNQUNwQiwyQkFBMkIsQ0FBQyw2QkFBNkI7QUFBQSxJQUMzRCxDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsTUFDSixjQUFjO0FBQUEsTUFDZCxTQUFTLENBQUMsbUJBQW1CO0FBQUEsSUFDL0IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxhQUFhO0FBQUEsUUFDYixpQkFBaUI7QUFBQSxVQUNmLE9BQU87QUFBQSxRQUNULENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
