import React, { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SkeletonProfile from './ui/SkeltonProfile'
import Spinner from './ui/Spinner'
import CustomSkeleton from './ui/CustomSkelton'
import SkeletonMui from './ui/SkeltonMui'

const Home = lazy(() => import('./page/Home'))
const About = lazy(() => import('./page/About'))
const NotFound = lazy(() => import('./page/NotFound'))


// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function lazyWithDelay(importFunction, ms) {
//     return React.lazy(() =>
//         Promise.all([importFunction(), delay(ms)]).then(([module]) => module)
//     );
// }

// const Home = lazyWithDelay(() => import('./page/Home'), 20000);
// const About = lazyWithDelay(() => import('./page/About'), 20000);
// const NotFound = lazyWithDelay(() => import('./page/NotFound'), 20000);


const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role='alert'>
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

const App = () => {
    return (
        <Router>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>

        </Router>
    )
}

export default App
