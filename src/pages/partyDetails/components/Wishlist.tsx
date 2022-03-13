import { Button } from "antd";
import { WishlistItem } from "../../../types/wishlistItem";
import AddWishlistForm from "./AddWishlistForm";

export interface IFormProps {
    wishlistItems: WishlistItem[]
}

function meToo(e: any) {
    var button = e.target.closest("button");
    // TODO connect with backend
    var id = button.id;

    if (button.classList.contains("redBackground")) {
        button.classList.remove("redBackground");
        button.textContent = "ME TOO";
    }
    else {
        button.classList.add("redBackground");
        button.textContent = "NOT ME";
    }
}

export default function Wishlist(props: IFormProps) {
    return (
        <>
            <div className="tabContent">
                <AddWishlistForm></AddWishlistForm>
                {props.wishlistItems.map((wishlistItem) => {
                    return (
                        <div className="wishlistListItem" key={wishlistItem.id}>
                            <div>
                                <img className="picture" src={"../" + wishlistItem.icon} />
                                <span className="wishlistItemDescription">{wishlistItem.description}</span>
                                <Button
                                    type="primary"
                                    className="buttonWishlistAgreement"
                                    onClick={meToo}
                                    id={wishlistItem.id.toString()}
                                >
                                    ME TOO
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}