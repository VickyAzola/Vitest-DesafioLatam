import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '@/views/ContactView.vue'

describe('ContactView', () => { 
    const wrapper = mount(ContactView)

    it('El HTML del componente se mantiene durante las pruebas', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Probando la existencia de la vista ContactView', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/contact',
                name: 'contact',
                component: ContactView
            }],
        })

        router.push({name: 'contact'})
        
        await router.isReady()

        const wrapper = mount(ContactView, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.findComponent(ContactView).exists()).toBe(true)
    })  
})