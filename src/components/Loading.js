import ReactLoading from "react-loading";

export default function Loading() {
    return(
        <ReactLoading 
            type={"spinningBubbles"}
            color={"#5e5e5e"}
            width={200}
            height={200}
        />
    );
}