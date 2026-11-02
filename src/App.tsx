import Counter from './components/counter'
import { RecipeCard } from './components/RecipeCard'
import './App.css'

function App() {
  return (
    <><div>
      <Counter />
      <Counter />
      <Counter />
    </div><section id="center">
        <RecipeCard 
        title="My awesome kebab"
        description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
        imageUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
        />
      </section></>
    
  )
}

export default App
