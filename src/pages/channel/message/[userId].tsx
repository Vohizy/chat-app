import {useRouter} from "next/router";

export default function UserId(){
    const router = useRouter()
    const id = router.query.channelId
    return(
        <h1>your are in user id = {id}</h1>
    )
}