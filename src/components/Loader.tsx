import React from "react"
import ContentLoader from "react-content-loader"

const Loader: React.FC = () => (
    <ContentLoader
        speed={2}
        width={450}
        height={108}
        viewBox="0 0 450 108"
        backgroundColor="#f50a0a"
        foregroundColor="#99b50d"
    >
        <rect x="11" y="267" rx="6" ry="6" width="244" height="25" />
        <rect x="165" y="283" rx="0" ry="0" width="3" height="0" />
        <rect x="13" y="299" rx="6" ry="6" width="242" height="51" />
        <rect x="12" y="369" rx="6" ry="6" width="93" height="25" />
        <rect x="148" y="359" rx="6" ry="6" width="106" height="46" />
        <rect x="10" y="82" rx="5" ry="5" width="66" height="25" />
        <rect x="100" y="0" rx="5" ry="5" width="300" height="15" />
        <rect x="100" y="50" rx="5" ry="5" width="100" height="15" />
        <rect x="100" y="25" rx="5" ry="5" width="200" height="15" />
        <circle cx="43" cy="33" r="33" />
    </ContentLoader>
)

export default Loader

