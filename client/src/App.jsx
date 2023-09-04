import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const AudioPage = lazy(() => import("./pages/AudioPage"));
const VideoPage = lazy(() => import("./pages/VideoPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="audio" element={<AudioPage />} />
          <Route path="video" element={<VideoPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
