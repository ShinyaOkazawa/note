// posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
    transform(data) {
        return data.sort((a, b) => {
            // 最新の記事を一番上に持ってくる
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        })
    },
})
