<script setup lang="ts">
import { ref, computed } from 'vue';
import ProjectCard from './ProjectCard.vue';
import SectionTitle from './SectionTitle.vue';

const props = defineProps({
	path: {
		type: String,
		required: true,
	},
	limit: {
		type: Number,
		default: 3,
	},
});

interface ProjectCardProps {
	projectName: string;
	techs: string[];
	description: string;
	borderColor: string;
	sourceLink: string;
	liveLink: string;
	projectImageSrc: string;
}


const projects: ProjectCardProps[] = [
	{
		projectName: 'AvoidTheMud',
		techs: ['typescript', 'reactjs', 'tailwindcss'],
		borderColor: 'border-zinc-100',
		description:
			"Avoid the Mud is a shortest path visualizer that uses Dijkstra's algorithm to find the shortest path between two points in a grid while avoiding obstacles like muds and trees.",
		sourceLink: 'https://github.com/projeto-de-algoritmos/Grafos2_AvoidTheMud',
		liveLink: 'https://projeto-de-algoritmos.github.io/Grafos2_AvoidTheMud/',
		projectImageSrc: '/images/avoid-the-mud.png',
	},
	{
		projectName: 'WikiBacon',
		techs: ['typescript', 'angular', 'angular-material'],
		borderColor: 'border-zinc-100',
		description:
			"An app that uses Wikipedia's API to find the shortest path between two Wikipedia articles with some constraints.",
		sourceLink: 'https://github.com/projeto-de-algoritmos/Grafos1-WikiBacon',
		liveLink: 'https://projeto-de-algoritmos.github.io/Grafos1-WikiBacon/',
		projectImageSrc: '/images/wiki-bacon.jpeg',
	},
	{
		projectName: 'Tile Installation Calculator',
		techs: ['typescript', 'reactjs', 'tailwindcss'],
		borderColor: 'border-zinc-100',
		description:
			"An app built for a local business that estimates the cost their tile installation service given the customer's area and tile of choice.",
		sourceLink: '',
		liveLink: 'https://master--effortless-fenglisu-62b59d.netlify.app/',
		projectImageSrc: '/images/tile-calculator.jpg',
	},
	{
		projectName: 'This Website',
		techs: ['typescript', 'reactjs', 'astrojs'],
		borderColor: 'border-zinc-100',
		description: 'My personal portfolio website and blog.',
		sourceLink: 'https://github.com/andremralves/new_website',
		liveLink: '',
		projectImageSrc: '/images/website-project.jpg',
	},
	{
		projectName: 'Django CRM',
		techs: ['python', 'django', 'html', 'css', 'bootstrap'],
		borderColor: 'border-orange-300',
		description: 'A CRM system to manage patients and appointments.',
		sourceLink: 'https://github.com/andremralves/django-CRM',
		liveLink: '',
		projectImageSrc: '/images/django-project.jpg',
	},
	{
		projectName: 'Todo List',
		techs: ['typescript', 'reactjs', 'tailwindcss'],
		borderColor: 'border-blue-300',
		description:
			'A Todo List app built with Typescript, TailwindCss, React and using Local Storage to store your tasks.',
		sourceLink: 'https://github.com/andremralves/react-tailwind-todolist',
		liveLink: 'https://serene-salmiakki-a825e6.netlify.app/',
		projectImageSrc: '/images/todolist-project.jpg',
	},
];

const limitedProjects = ref<ProjectCardProps[]>(projects.slice(0, props.limit || 3));



</script>

<template>
	<section class="mt-10">
		<SectionTitle title="Projects" />
		<ProjectCard v-for="project in limitedProjects" :key="project.projectName" :projectName="project.projectName"
			:techs="project.techs" :description="project.description" :borderColor="project.borderColor"
			:sourceLink="project.sourceLink" :liveLink="project.liveLink" :projectImageSrc="project.projectImageSrc" />
		<a v-if="path !== '/projects/'" href="/projects/">
			<button class="mt-8 w-full rounded bg-zinc-200 py-2 font-semibold text-zinc-800 hover:bg-zinc-300">
				See more projects
			</button>
		</a>
	</section>
</template>
