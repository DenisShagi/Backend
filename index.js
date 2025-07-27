import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.post('/auth/token', (req, res) => {
	res.json({
		access_token: 'mock-access-token',
		refresh_token: 'mock-refresh-token',
		token_type: 'Bearer',
		expires_in: 3600,
		user: {
			id: 'user-123',
			name: 'Барабиджаев И.В.',
			role: 'author',
		},
		models: [
			{
				id: '00012',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2', 'ЛП2', '+3'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📄',
			},
			{
				id: '00011',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📄',
			},
			{
				id: '00010',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📄',
			},
			{
				id: '00009',
				title:
					'«Как закалялась сталь» — частично автобиографический роман советского писателя Николая Остров...',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📄',
			},
			{
				id: '00008',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '🔗',
			},
			{
				id: '00007',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '🔗',
			},
			{
				id: '00006',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📦',
			},
			{
				id: '00005',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📦',
			},
			{
				id: '00004',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📦',
			},
			{
				id: '00003',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📄',
			},
			{
				id: '00002',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📄',
			},
			{
				id: '00001',
				title: 'Название модели. Должно быть длинным',
				tags: ['ЛПЦ2'],
				author: 'Барабиджаев И.В.',
				createdAt: '12.12.25 15:00',
				icon: '📦',
			},
		],
	})
})

app.listen(PORT, () => {
	console.log(`Mock auth server is running on http://localhost:${PORT}`)
})
