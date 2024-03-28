import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Chip,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getInventory, getProduct } from "../components/productApi";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import OrderForm from "./orders/OrderForm";
import PropTypes from "prop-types";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Product() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pid = searchParams.get("pid");
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [updatedProductPrice, setUpdatedProductPrice] = useState(0);
  const [productWeight, setProductWeight] = useState("");
  const [productWidth, setProductWidth] = useState("");
  const [productHeight, setProductHeight] = useState("");
  const [productVid, setProductVid] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [quantity, setQuantity] = useState(1);
  const validSizes = ["2XL", "L", "M", "S", "XL"];

  const [openForm, setOpenForm] = useState(false);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    setUpdatedProductPrice((productPrice * quantity).toFixed(2));
  }, [quantity]);

  const handleProduct = async () => {
    setLoading(true);
    try {
      const response = await getProduct(pid);

      setProduct(response.data);
 

      setProductImage(response.data.variants[0].variantImage);
      setProductWeight(response.data.variants[0].variantWeight);
      setProductWidth(response.data.variants[0].variantWidth);
      setProductHeight(response.data.variants[0].variantHeight);
      setProductVid(response.data.variants[0].vid);
      const originalPrice = parseFloat(
        response.data.variants[0].variantSellPrice
      );

           
  var markupPercentage = 0;
  if (originalPrice> 5) {
    markupPercentage = 100;
  } else {
    markupPercentage = 500;
  }
  const markupFactor = 1 + markupPercentage / 100;
      const updatedPrice = (originalPrice * markupFactor).toFixed(2); // Format to 2 decimal places
      setProductPrice(updatedPrice);
      setUpdatedProductPrice(updatedPrice);
      const inventory = await getInventory(productVid);
      setCountryCode(inventory.data[0].countryCode);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleProduct();
  }, []);

  const setVariant = (variant) => {
  
    var markupPercentage = 0;
    if (variant.variantSellPrice > 5 ) {
      markupPercentage = 100;
    } else {
      markupPercentage = 500;
    }
    const markupFactor = 1 + markupPercentage / 100;
  
  
    setProductImage(variant.variantImage);
    setProductWeight(variant.variantWeight);
    setProductWidth(variant.variantWidth);
    setProductHeight(variant.variantHeight);
    setProductVid(variant.vid);
    setProductPrice((variant.variantSellPrice * markupFactor).toFixed(2));
    setUpdatedProductPrice(
      (variant.variantSellPrice * markupFactor).toFixed(2)
    );
    setQuantity(1);
  };

  const statusMapping = {
    0: "Deleted",
    1: "To be submitted",
    2: "Pending",
    3: "On sale",
    4: "Audit failure",
    5: "Off sale",
    6: "To be reviewed",
  };

  if (loading) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Grid>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <h2 className="text-2xl font-bold font-palanquin text-center w-full md:w-full xl:w-1/2 text-slate-600">
        {product?.productNameEn}
      </h2>{" "}
      <Grid container mt={2} columnGap={4}>
        <Grid
          item
          xs={1}
          columnGap={1}
          display="flex"
          justifyContent="center"
          sx={{
            width: "60px",
            height: { xs: "250px", md: "500px" },
            overflowX: "auto",
            flexWrap: "wrap", // Allow items to wrap to the next line
          }}
        >
          {product?.productImageSet.map((imageUrl, index) => (
            <Avatar
              onClick={() => setProductImage(imageUrl)}
              src={imageUrl}
              alt={`Product ${index}`}
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: 2,
                m: 1,
                border: "2px solid #B131B4",
                "&:hover": {
                  opacity: "0.5",
                },
                transition: "background-color 0.5s ease",
              }}
            ></Avatar>
          ))}
        </Grid>
        <Grid item xs={12} md={5} xl={4}>
          <Avatar
            src={productImage}
            sx={{
              borderRadius: "32px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          ></Avatar>
        </Grid>
        <Grid item xs={12} md={5} xl={6}>
          <List>
            <ListItem>
              <ListItemText
                primary="Category"
                secondary={product?.categoryName}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={
                  <Typography variant="h4">
                    {updatedProductPrice + "$"}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Material"
                secondary={
                  product?.materialNameEn ? (
                    product.materialNameEn
                      .replace(/\[|\]/g, "")
                      .split(",")
                      .map((m, index) => (
                        <Chip
                          key={index}
                          label={m.trim()}
                          variant="outlined"
                          size="small"
                          sx={{ marginRight: 1 }}
                        />
                      ))
                  ) : (
                    <span>No material available</span>
                  )
                }
              />
            </ListItem>

            {product?.variants.length > 1 && (
              <>
                <Grid item xs={12} md={5}>
                  <ListItem>
                    <ListItemText
                      primary={
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ marginRight: "8px" }}>variants</span>
                          <span>{"(" + product.productKeyEn + ")"}</span>
                        </div>
                      }
                    />
                  </ListItem>
                </Grid>
                <Grid
                  item
                  xs={12}
                  gap={2}
                  display="flex"
                  justifyContent="center"
                  sx={{
                    overflowX: "auto",
                    flexWrap: "wrap", // Allow items to wrap to the next line
                  }}
                >
                  {product?.variants.map((v, index) => (
                    <Box
                      textAlign="center"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Avatar
                        key={v.vid}
                        onClick={() => setVariant(v)}
                        src={v.variantImage}
                        alt={`Product ${index}`}
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "8px",
                          "&:hover": {
                            opacity: "0.5",
                          },

                          transition: "background-color 0.5s ease",
                        }}
                      ></Avatar>

                      {product.productKeyEn == "Color-Size" && (
                        <ListItem>
                          <ListItemText
                            fontSize={0}
                            secondary={validSizes.find((size) =>
                              v.variantKey.includes(size)
                            )}
                          />
                        </ListItem>
                      )}
                    </Box>
                  ))}
                </Grid>
              </>
            )}
            <ListItem sx={{ mt: 4 }}>
              <ListItemText primary="weight" secondary={productWeight + "g"} />
              <ListItemText
                primary="width"
                secondary={productWidth + "cm"}
              />{" "}
              <ListItemText primary="height" secondary={productHeight + "cm"} />{" "}
            </ListItem>
          </List>
          <Grid item xs={4} justifyContent="start" display="flex">
            <ListItem>
              <ListItemText primary="Quantity: " />
            </ListItem>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                disabled={quantity === 1}
                onClick={() => {
                  setQuantity(quantity - 1);
                }}
              >
                -
              </Button>
              <Button>{quantity}</Button>
              <Button
                disabled={quantity === 50}
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} mt={4} justifyContent="center">
            <Button
              onClick={() => {
                setOpenForm(true);
              }}
              disableElevation
              variant="contained"
              sx={{
                width: { xs: "60%", md: "40%" },
                color: "white",
                borderRadius: "32px",
                fontSize: { xs: "12px", md: "16px" },
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                textAlign: "center",
              }}
            >
              <ShoppingCartIcon sx={{ color: "white" }} />
              Buy now
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={6}>
        <CustomTabPanel value={value} index={0}>
          <Grid item xs={12} m={2} justifyContent="center" display="flex">
            {product && (
              <Grid container justifyContent="center">
                <Grid item xs={12} m={2} justifyContent="center" display="flex">
                  <Typography variant="h4">
                    {" "}
                    <span className="text-primary">Product</span> Details
                  </Typography>
                </Grid>

                <Box
                  dangerouslySetInnerHTML={{
                    __html: product.description.replace(
                      /<div id="toamazon".*?<\/div>/g,
                      "<p>This content has been removed.</p>"
                    ),
                  }}
                  style={{
                    fontSize: "16px", // Set the font size of the text
                    maxWidth: "50%", // Ensure images don't exceed the container width
                    height: "auto", // Allow images to adjust their height proportionally
                  }}
                ></Box>
              </Grid>
            )}
          </Grid>
        </CustomTabPanel>
      </Grid>
      {openForm && (
        <Grid item xs={12}>
          <OrderForm
            vid={productVid}
            shippingName={product.productNameEn}
            productImage={productImage}
            fromCountryCode={countryCode}
            quantity={quantity}
            price={updatedProductPrice}
            setOnClose={() => {
              setOpenForm(false);
            }}
          />
        </Grid>
      )}
    </Grid>
  );
}
