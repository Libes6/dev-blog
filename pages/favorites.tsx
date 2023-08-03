
import {NextPage} from "next";
import {NextPageAuth} from "@/providers/auth-provider/auth-page.types";
import Meta from "@/components/ui/Meta";
import Layout from "@/components/ui/layout/Layout";
import Catalog from "@/components/ui/catalog/Catalog";
import {useProfile} from "@/hooks/useProfile";


const Favorites: NextPageAuth = () => {
    return <></>
};
Favorites.isOnlyUser =true;
export default Favorites