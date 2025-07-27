import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.post('/auth/token', (req, res) => {
	// Обычно сюда приходят client_id, client_secret, grant_type, username, password и пр.
	// Но мы упрощаем
	res.json({
		access_token: 'mock-access-token',
		refresh_token: 'mock-refresh-token',
		token_type: 'Bearer',
		expires_in: 3600,
	})
})

app.listen(PORT, () => {
	console.log(`Mock auth server is running on http://localhost:${PORT}`)
})
