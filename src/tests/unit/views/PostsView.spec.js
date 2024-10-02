import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '@/views/PostsView.vue'

describe('PostsView', () => { 
    
    const wrapper = mount(PostsView)

    it('El HTML del componente se mantiene durante las pruebas', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    
    test('Probando la existencia de la vista PostsView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/posts',
                name: 'PostsViewVue',
                component: PostsView
            }],
        })

        router.push('/posts')
        await router.isReady()

        const wrapper = mount(PostsView, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.findComponent(PostsView).exists()).toBe(true)
    })  

    test('Tiene una lista de posts, con el texto "post.name"', async () => {
        wrapper.vm.posts = [
            { id: 1, name: 'Post 1' },
            { id: 2, name: 'Post 2' },
            { id: 3, name: 'Post 3' },
            { id: 4, name: 'Post 4' }
        ]

        await wrapper.vm.$nextTick()

        const li = wrapper.findAll('li')

        expect(li[0].text()).toBe('Post 1')
        expect(li[3].text()).toBe('Post 4')
        expect(li).toHaveLength(4)
    })
})