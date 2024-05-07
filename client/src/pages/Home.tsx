import './global.scss'
import { CardBlog } from '../components/cards/CardBlog'
export const Home = (): JSX.Element => {
  return (
       <main className="container">
          <div className=" space-y-7 flex-col items-center justify-center ">
            <CardBlog/>
          </div>
       </main>
  )
}
