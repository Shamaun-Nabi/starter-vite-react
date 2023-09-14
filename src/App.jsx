import { ToastContainer, toast } from 'react-toast'

function App() {


  return (
    <>
      <h1 className='text-center text-3xl p-1 flex justify-center hover:bg-green-400 transition-colors duration-500'>Starter Template with vite tailwind router react icons toastify and react</h1>
      <button className='p-4 btn btn-secondary' >Say hi!</button>
      <ToastContainer position='top-right' />
    </>
  )
}

export default App
