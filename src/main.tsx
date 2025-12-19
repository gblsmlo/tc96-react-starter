import { App } from '@views/pages/app'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// biome-ignore lint: noUnusedVariables
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
