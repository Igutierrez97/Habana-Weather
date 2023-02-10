
import { ClimaHoy } from './componentet/ClimaHoy'
import { ProximosDias } from './componentet/ProximosDias'
import { Region } from './componentet/Ragion'
import './index.css'



function App() {
  return (
    <div className='dark:bg-slate-800 dark:text-white h-screen'>
      <Region />
      <ClimaHoy />
      <div>
        <ProximosDias />
      </div>
    </div>
  )
}

export default App
