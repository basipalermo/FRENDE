import GalleryCustom from "../molecules/GalleryCustom"

const CustomMain = () => {
    return (
        <>
        <p className="text-light mx-4"> Naruto</p>
        <GalleryCustom url="http://www.omdbapi.com/?apikey=cf9516cd&s=naruto"/>
        <br/>
        <p className="text-light mx-4"> Attack On Titan </p>
        <GalleryCustom url="http://www.omdbapi.com/?apikey=cf9516cd&s=attack%20on%20titan"/>
        <br/>
        <p className="text-light mx-4"> Dragon Ball </p>
        <GalleryCustom url="http://www.omdbapi.com/?apikey=cf9516cd&s=dragon%20ball"/>

        </>
    )
}

export default CustomMain;