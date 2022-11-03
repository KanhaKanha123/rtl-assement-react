import ArticlesListHorizontal from "./articles/ArticlesListHorizontal";
import ArticlesListVerticle from "./articles/ArticlesListVerticle";
import useGetData from '../hooks/useGetData';

import Banner from "./banner/Banner";
import ErrorBoundary from "../errorBoundries/ErrorBoundry";
const Home = () => {

    const [state] = useGetData();
    const { articleData,error,loading } = state;
    const { bundelItems } = articleData;

    return (<>
        {!loading ? <div data-testid="home-page" className="home">
            <ErrorBoundary> <Banner data-testid="banner-component" artcleData={articleData}></Banner></ErrorBoundary>

            {bundelItems?.length > 0 && <ErrorBoundary><ArticlesListHorizontal data-testid="articlesListHorizontal-component" bundles={bundelItems.slice(0, 3)}></ArticlesListHorizontal></ErrorBoundary>}

            {bundelItems?.length > 0 && <ErrorBoundary><ArticlesListVerticle data-testid="articlesListVerticle-component" bundles={bundelItems.slice(3)}></ArticlesListVerticle></ErrorBoundary>}
        </div>
            : <span>Loading.......</span>
        }
    </>
    )
}

export default Home;