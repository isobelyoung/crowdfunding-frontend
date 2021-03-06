export const allProjects = [
	{
		id: 1,
		title: "Project One",
		description: "The first project.",
		goal: 150,
		image: "https://i.pinimg.com/564x/73/14/4f/73144ffc304c42cf726867601e8329b5.jpg",
		is_open: false,
		date_created: "2020-03-20T14:22:23.382748Z",
		owner: 1,
	},
	{
		id: 2,
		title: "Project Two",
		description: "The second project.",
		goal: 150,
		image: "https://i.pinimg.com/564x/b2/b6/8f/b2b68fb64763bc57eb8afa0435889c15.jpg",
		is_open: false,
		date_created: "2020-03-20T18:28:23.382748Z",
		owner: 1,
	},
	{
		id: 3,
		title: "Project Three",
		description: "The third project.",
		goal: 150,
		image: "https://i.pinimg.com/564x/1f/63/e1/1f63e1e4a26e8f025065b8d9ac434773.jpg",
		is_open: false,
		date_created: "2020-02-20T14:28:23.382748Z",
		owner: 1,
	},
	{
		id: 4,
		title: "Project Four",
		description: "The fourth project.",
		goal: 150,
		image: "https://i.pinimg.com/564x/c7/67/9b/c7679b46f3e4bce11aef3c4a2fc3ee11.jpg",
		is_open: false,
		date_created: "2020-03-20T14:28:23.382748Z",
		owner: 2,
	},
	{
		id: 5,
		title: "Project Five",
		description: "The fifth project.",
		goal: 150,
		image: "https://i.pinimg.com/564x/68/9f/89/689f89b11e52497a8de7276c62961932.jpg",
		is_open: false,
		date_created: "2019-03-20T12:28:23.382748Z",
		owner: 2,
	},
	{
		id: 6,
		title: "Project Six",
		description: "The sixth project.",
		goal: 150,
		image: "https://i.pinimg.com/564x/61/36/2b/61362bf767fbeb25efb32b06b46cc6df.jpg",
		is_open: false,
		date_created: "2020-03-20T14:28:23.382748Z",
		owner: 1,
	},
	{
		id: 7,
		title: "Project Seven",
		description: "The seventh project.",
		goal: 150,
		image: "https://i.pinimg.com/564x/e9/25/1c/e9251c79965ce70ceb462c029d5605be.jpg",
		is_open: false,
		date_created: "2020-02-20T14:28:23.382748Z",
		owner: 2,
	},
];

export const oneProject = {
	id: 1,
	title: "Project One",
	description: "The first project.",
	goal: 150,
	image: "https://i.pinimg.com/564x/09/b7/e2/09b7e2e52ecd9d9a2376c7880da2be72.jpg",
	is_open: false,
	date_created: "2020-03-20T14:22:23.382748Z",
	owner: 1,
	pledges: [
		{
			id: 1,
			amount: 100,
			comment: "A comment for the pledge",
			anonymous: false,
			supporter: 3,
			project_id: 1,
		},
	],
};