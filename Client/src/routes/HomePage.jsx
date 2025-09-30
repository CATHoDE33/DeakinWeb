import { Typography } from '@mui/material';
import '../App.css'
import BannerImage from '../BannerImage'
import ArticleCardList from '../ArticleCardList'
import TutorialCardList from '../TutorialCardList';
import CenterButton from '../CenterButton'
import SignupBar from '../SignupBar'

export function HomePage() {
  return (
    <div>
      <br />
      <br />
      <br />
      <BannerImage />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h4" align="center" >Featured Articles</Typography>
      <br />
      <ArticleCardList />
      <br />
      <br />
      <CenterButton text="See all Articles" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h4" align="center">Featured Tutorials</Typography>
      <br />
      <TutorialCardList />
      <br />
      <br />
      <CenterButton text="See all Tutorials" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SignupBar />
      <br />
    </div>
  )
}

export default HomePage;