import Link from "next/link";
import Layout from "../components/Layout";

import { Button } from "react-bootstrap";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
      </>
    </p>
  </Layout>
);

export default IndexPage;
