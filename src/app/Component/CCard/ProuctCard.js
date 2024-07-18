import { Grid } from "@mui/material";
import ImageComponent from "../ImageComponent";
import { Image } from "../../util/them";
import { Col, Flex, Row, Typography } from "antd";
import styled from "styled-components";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const { Text } = Typography;
const Text2 = styled.div`
  font-size: 16px; /* Default font size */

  @media (min-width: 300px) {
    font-size: 14px; /* Font size for screens larger than 300px */
  }

  @media (min-width: 600px) {
    font-size: 20px; /* Font size for screens larger than 600px */
  }

  @media (min-width: 960px) {
    font-size: 20px; /* Font size for screens larger than 960px */
  }

  @media (min-width: 1280px) {
    font-size: 20px; /* Font size for screens larger than 1280px */
  }
`;

export default function ProductCard({
  onClick,
  image,
  title,
  description,
  off,
  Price,
  comboOffer,
}) {
  return (
    <Grid2
      m={1}
      bgcolor={"whitesmoke"}
      sx={{
        width: {
          xs: "25%",
          sm: "20%",
          md: "15%",
          lg: "15%",
          xl: "15%",
        },
      }}
    >
      <Col xs={24} xl={24} sm={24} md={24}>
        {off ? (
          <Grid
            sx={{
              width: {
                xs: "90%",
                sm: "90%",
                md: "90%",
                lg: "90%",
                xl: "90%",
              },
            }}
            style={{
              position: "absolute",
              backgroundColor: "Green",
              zIndex: 1,
              borderBottomRightRadius: 25,
              borderTopLeftRadius: 25,
              padding: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>-{off}off</Text>
          </Grid>
        ) : null}
        <Grid onClick={onClick}>
          <Col xs={24} xl={24} sm={24} md={24}>
            <ImageComponent width={"100%"} height={"100%"} src={image} />
          </Col>
        </Grid>
        <Col
          style={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              display: "flex",
              flexWrap: "wrap",
              overflowWrap: "anywhere",
            }}
          >
            <Text2>{title}</Text2>
          </span>
            {comboOffer ? (
              <Grid
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                  },
                }}
                style={{
                  backgroundColor: "#7877D4",
                  zIndex: 1,
                  borderBottomLeftRadius: 25,
                  borderTopRightRadius: 25,
                  padding: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>Combo Offer</Text>
              </Grid>
            ) : null}
          <Grid
            style={{
              justifyContent: "flex-end",
              display: "flex",
              alignItems: "flex-end",
              
            }}
          >
            <Text style={{ fontSize: 20 }}>
              <Text style={{ color: "green" }}>₹.</Text>
              {Price}
            </Text>
          </Grid>
        </Col>
      </Col>
    </Grid2>
  );
}
