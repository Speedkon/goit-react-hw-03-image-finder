import { Component } from "react";
import { fetchImages } from "./helpers/api";
import { MutatingDots } from  'react-loader-spinner'
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import css from './App.module.css';

export class App extends Component {
  state = {
    gallery: [],
    query: "",
    page: 1,
    isLoading: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ isLoading: true });
        const initialImages = await fetchImages(query, page);
        
        this.setState(prevState => {
          const {hits,totalHits } = initialImages;

          return {
            gallery: [...prevState.gallery, ...hits],
            isLoading: false,
            totalPages: Math.ceil(totalHits / 12),
          }
        });
      } catch (error) {
        this.setState({ error: true, isLoading: false,})
      } finally {
      this.setState({ isLoading: false });
    }
    }
  }

  handleSubmit = value => {

    return this.setState({
      query: value.query,
      page: 1,
      gallery: [],
    })
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1
      }
    })
  }

  render() {
    const { isLoading, error, gallery } = this.state;
    const images = gallery.length !== 0;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>

        {isLoading && (<MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor='#4fa94d'
          radius='12.5'
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        )}

        {error && (
          <b>Oops! Something went wrong! Please try reloading this page! 🥹</b>
        )}  
        {images && <ImageGallery gallery={gallery}></ImageGallery>}
        {this.loadMore && !isLoading  && images && <Button onClick={this.loadMore} name="Load more"/>} 
      </div>
    )
  }
}




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
