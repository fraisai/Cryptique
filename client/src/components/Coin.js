import React, { useState } from 'react'
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Collapse } from '@mantine/core';
import MarketCharts from './MarketCharts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Coin = ({key = new Date(), market_cap_rank, market_cap, name, symbol, img = "none", current_price, total_volume}) => {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
  
  const [opened, setOpen] = useState(false);

  return (
    <>
      <div className='coin-card-width'>
      <Card shadow="md" p="lg">
        
      <Card.Section style={{ display: 'flex', flexDirection: 'column' }}>
      <Image src={img} height='100px' width='auto' alt="cryptocurrency logo" style={{ padding: '20px', alignSelf: 'center' }} />
    </Card.Section>

    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.xs }}>
      <Text style={{ fontSize: '14.5px' }} weight={600}>{name} ({symbol.toUpperCase()})</Text>
      <Badge color="green" variant="light" size="xs">
        Market Cap Rank: {market_cap_rank}
      </Badge>
    </Group>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm, justifyContent: 'center' }}>
            <Badge color="yellow" variant="light">
              Current Price: {current_price}
            </Badge>
            <Badge color="orange" variant="light">
              Total Volume: {total_volume}
            </Badge>
            <Badge color="pink" variant="light">
              Market Cap: {market_cap}
            </Badge>
          </Group>
        </div>
        

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        </Text>
{/* PUT GRAPHS IN HERE */}
        <Button 
          variant="light" 
          color="blue" 
          fullWidth 
          style={{ marginTop: 14, marginBottom: 12}} 
          onClick={() => setOpen((o) => !o)}
        >
          Click for Total Trading Volume (24 Hours)
        </Button>

        <Collapse in={opened}>
          <MarketCharts
            name={name.toLowerCase()}
          />
        </Collapse>

        {/* <FavoriteIcon/> */}
        <AddCircleOutlineIcon 
        />
      </Card>
    </div>
    </>
  )
}



export default Coin;

