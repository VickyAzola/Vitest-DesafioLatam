import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('AboutView', () => {
    const wrapper = mount(AboutView)

    it('El HTML del componente se mantiene durante las pruebas', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Probando la existencia de la vista AboutView ', async () => {
        const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
            path: '/about',
            name: 'about',
            component: AboutView
            }
        ]
        })
        router.push({name: 'about'})
        await router.isReady()

        const wrapper = mount(AboutView, {
        global: {
            plugins: [router]
        }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })
})
