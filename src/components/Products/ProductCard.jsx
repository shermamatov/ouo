import { Box, Button, createTheme, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bookContext } from "../../contexts/BookContext";
import { cartContext } from "../../contexts/CartContext";
import { wishContext } from "../../contexts/WishContext";
import imgTimur from "../../img/timurPhoto.jpg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useAuth } from "../../contexts/AuthContextProvider";
const ProductCard = ({ item }) => {
    const { addToCart } = useContext(cartContext);
    const { addToWish, getWish } = useContext(wishContext);
    const { prover, prover2 } = useContext(bookContext);
    const navigate = useNavigate();
    useEffect(() => {
        getWish();
    }, []);

    return (
        <div>
            <Box
                onClick={() => navigate(`/product/${item.id}`)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: { lg: "400px", md: "350px" },
                    padding: { sm: "1.25rem", xs: "0.7rem" },
                    width: "100%",
                    marginBottom: "20px",
                }}
            >
                <Box>
                    <Box sx={{ maxWidth: "70%", margin: "auto" }}>
                        <img src={item.img} alt="" style={{ width: "100%" }} />
                    </Box>

                    <Typography
                        sx={{
                            fontSize: { md: "18px", sm: "17px" },
                        }}
                    >
                        {item.name}
                    </Typography>
                    <Typography sx={{ color: "gray", fontSize: "14px" }}>
                        {item.autor}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <Typography>{item.price}$</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <button
                            // variant="contained"
                            style={{
                                width: "70%",
                                height: "30px",
                                border: "none",
                                background: "#037fe0",
                                color: "white",
                            }}
                            onClick={(e) => {
                                addToCart(item);
                                e.stopPropagation();
                            }}
                        >
                            {!prover2(item.id) ? "в корзину" : "отмена"}
                        </button>
                        <button
                            onClick={(e) => {
                                addToWish(item);
                                e.stopPropagation();
                            }}
                            // variant="contained"
                            style={{
                                width: "25%",
                                height: "30px",
                                border: "none",
                            }}
                        >
                            {!prover(item.id) ? (
                                <BookmarkBorderIcon />
                            ) : (
                                <BookmarkIcon />
                            )}
                        </button>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default ProductCard;
