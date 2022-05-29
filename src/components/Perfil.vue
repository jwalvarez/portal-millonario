<template>
    <div class="w-[70%] mx-auto">
        <div class="text-center relative mt-20">
            <div class="absolute z-20 -top-20 left-[40%]">
                <div class="avatar my-6">
                    <div class="w-64 rounded-full shadow-2xl">
                        <img src="https://api.lorem.space/image/face?hash=47449" />
                    </div>
                </div>
                <h2 class="md:text-3xl text-2xl text-base-100 font-black px-[4%]">Jhon Álvarez</h2>
                <p class="text-sm text-base-100 font-medium my-auto">@jwalvarez</p>
            </div>
            <div class="flex justify-center">
                <div class="bg-black/80 z-10 absolute rounded-3xl w-full h-[300px]"></div>
                <img src="https://picsum.photos/1000/300" class="relative rounded-3xl h-[300px]" />
            </div>
        </div>

        <div class="flex justify-between mx-auto my-10">
            <div class="block text-left w-1/2">
                <h2
                    class=" my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto">
                    Biografía
                </h2>
                <p class="text-sm text-base-100 font-medium my-auto">
                    Pellentesque sodales ante et velit convallis, nec aliquet nisl eleifend. Nullam cursus eros risus,
                    ut congue nibh accumsan ac. Nullam augue massa, tempor id porta quis, congue et tortor. Nulla
                    molestie maximus ultricies. Aenean urna ipsum, ultrices ut tortor ac, consectetur luctus sapien.
                </p>
            </div>
            <div class="block text-left">
                <h2
                    class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto">
                    Código referido
                </h2>
                <div class="flex">
                    <p class="text-success text-md font-bold mb-4">
                        xaksjdhuqowiu123laksjdlkxd
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="bi bi-clipboard text-success mx-4 w-4 h-4" viewBox="0 0 16 16">
                        <path
                            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path
                            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="block text-left w-[70%] mt-20">
            <h2 class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto">
                Estadisticas
            </h2>
        </div>

        <div class="stats shadow bg-base-100/5 border border-black/20 flex mb-20">
            <div class="stat w-1/3">
                <div class="stat-title text-base-100">Cursos iniciados</div>
                <div class="stat-value text-primary">12</div>
                <div class="text-sm text-base-100/60">Los cursos te ayudan a educarte y conocer más sobre aspectos
                    especificos.
                </div>
            </div>

            <div class="stat w-1/3">
                <div class="stat-title text-base-100">Cursos completados</div>
                <div class="stat-value text-primary">87%</div>
                <div class="text-sm text-base-100/60">Porcentaje de de finalización de tus cursos.</div>
            </div>

            <div class="stat w-2/4">
                <div class="stat-figure text-primary">
                    <div class="avatar online">
                        <div class="w-16 rounded-full">
                            <img src="https://api.lorem.space/image/face?w=128&h=128" />
                        </div>
                    </div>
                </div>
                <div class="stat-title text-base-100">Referidos</div>
                <div class="stat-value text-success">8</div>
                <div class="text-sm text-base-100/60">Los referidos son los usuarios que han comprado un curso
                    por medio de tu link.</div>
            </div>
        </div>

        <div class="block text-left w-[70%]">
            <h2 class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto">
                Mis cursos
            </h2>
        </div>

        <div class="flex py-4 space-x-6 ml-[0%] rounded-box overflow-x-scroll">
            <div v-for="course in trading_courses"
                class="carousel-item shadow-xl rounded-2xl h-90 w-[300px] m-auto hover:md:-translate-y-2 duration-300">
                <CourseCard :img="course.img" :title="course.title" :description="course.description"
                    :startDate="course.startDate" :tags="course.tags" />
            </div>
        </div>
    </div>
</template>
<script>
import CourseCard from './CourseCard.vue'
export default {
    data() {
        return {
            trading_courses: [
                {
                    title: "Introduccion al trading by Andrés",
                    description: "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
                    url: "/",
                    img: "https://picsum.photos/700/400",
                    startDate: "Junio 12, 2022",
                    tags: ["#trading", "#binance"],
                },
                {
                    title: "Opciones binarias",
                    description: "Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
                    url: "/goarbit",
                    img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
                    startDate: "Agosto 3, 2022",
                    tags: ["#trading", "#bitcoin"],
                },
                {
                    title: "¿Qué es GoArbit?",
                    description: "Nunc malesuada euismod lectus. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
                    url: "/s",
                    img: "https://picsum.photos/600/500",
                    startDate: "Junio 17, 2022",
                    tags: ["#trading", "#exchange"],
                },
                {
                    title: "¿Qué es GoArbit? 22",
                    description: "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. ",
                    url: "/s",
                    img: "https://picsum.photos/700/600",
                    startDate: "Septiembre 19, 2022",
                    tags: ["#trading", "#binance"],
                },
                {
                    title: "¿Qué es GoArbit? 33",
                    description: "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
                    url: "/s",
                    img: "https://picsum.photos/800/900",
                    startDate: "Enero 24, 2023",
                    tags: ["#trading", "#binance"],
                },
            ]
        };
    },
    components: { CourseCard }
}
</script>
<style lang="">
    
</style>