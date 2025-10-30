// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// This Source Code Form is "Incompatible With Secondary Licenses", as
// defined by the Mozilla Public License, v. 2.0.

import {Text, Flex, Link, Card, Grid} from "@radix-ui/themes";
import './Home.css'

function Home() {
  return (
    <Flex justify="center" align="center" width="100%" height="80vh" className="bg-gradient">
      <Grid columns="2" gap="9"  maxWidth="60vw" justify="center">
        <Link href="/harmony" className="link">
          <Card size="3" className="card">
            <Flex justify="center" direction="column" gap="6">
              <Text as="p" size="5" align="center">
                Harmony DB
              </Text>
              <Text as="p" size="2" align="center">
                Browse the harmony database and learn about music theory.
              </Text>
            </Flex>
          </Card>
        </Link>
        <Link href="/tonundrum" className="link">
          <Card size="3" className="card">
            <Flex justify="center" direction="column" gap="6">
              <Text as="p" size="5" align="center">
                Tonundrum
              </Text>
              <Text as="p" size="2" align="center">
                Challenge yourself to create music under various constraints.
              </Text>
            </Flex>
          </Card>
        </Link>
      </Grid>
    </Flex>
  )
}

export default Home
