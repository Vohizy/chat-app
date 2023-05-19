import {useRouter} from "next/router";

export default function ChannelId(){
    const router = useRouter()
    const id = router.query.channelId
    return(
        <h1>your are in id = {id}</h1>
    )
}