import TodoList from './TodoList'

function App() {
  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">To-do List Maker</h1>
        <p className="text-gray-600 mt-2">Easily create lists with me!</p>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App
