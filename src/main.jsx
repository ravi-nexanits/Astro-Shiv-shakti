import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Signal that JS is running so CSS can safely apply the reveal/scroll animations.
// If JS ever fails to load, every .reveal stays visible (see index.css).
document.documentElement.classList.add('js-enabled')

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
