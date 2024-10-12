export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"misc":{"path":"/category/misc/","indexes":[0,1,2,3,4]},"Front-End":{"path":"/category/front-end/","indexes":[5,6,7,8,9,10,11,12]}}}},"tag":{"/":{"path":"/tag/","map":{"Node.js":{"path":"/tag/node.js/","indexes":[4]},"ts-node":{"path":"/tag/ts-node/","indexes":[4]},"GitHub Pages":{"path":"/tag/github-pages/","indexes":[3]},"Vue.js":{"path":"/tag/vue.js/","indexes":[10,11,12]},"quality":{"path":"/tag/quality/","indexes":[2]},"QCD":{"path":"/tag/qcd/","indexes":[2]},"Slack":{"path":"/tag/slack/","indexes":[1]},"TypeScript":{"path":"/tag/typescript/","indexes":[9]},"formatter":{"path":"/tag/formatter/","indexes":[8]},"Vite":{"path":"/tag/vite/","indexes":[7]},"CSS":{"path":"/tag/css/","indexes":[6]},"clamp":{"path":"/tag/clamp/","indexes":[6]},"ソフトスキル":{"path":"/tag/ソフトスキル/","indexes":[0]},"ハードスキル":{"path":"/tag/ハードスキル/","indexes":[0]},"VitePress":{"path":"/tag/vitepress/","indexes":[5]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

