export default defineNuxtPlugin({
    name: "ENV",
    setup(nuxtApp){
        const config = useRuntimeConfig();
        return {
            provide: {
                base_url : config.public.BASE_URL
            }
        }
    }
})