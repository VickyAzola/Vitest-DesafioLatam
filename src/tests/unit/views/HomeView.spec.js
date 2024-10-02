import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('HomeView', () => {
    const wrapper = mount(HomeView)

    it('El HTML del componente se mantiene durante las pruebas', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Probando la existencia de la vista HomeView', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/home',
                name: 'home',
                component: HomeView
            }],
        })

        router.push('/home')
        await router.isReady()
    
        const wrapper = mount(HomeView, {
            global: {
                plugins: [router]
            }
        })
        
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })  
})
