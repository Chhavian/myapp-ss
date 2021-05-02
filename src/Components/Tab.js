import React, { useState } from 'react'
import TabItemComponent from './TabItem'
import Card from './Card'
import styled from 'styled-components'
import CardEnterprise from './CardEnterprise'


function Tab() {
    const tabItems = [
        {
            id: 1,
            title: '$100K-$200K',
            icon: 'tabitem__icon fas fa-child',
            contents: [{
                qualified: 20,
                final_price: 1679,
                live_transfer: 69,
                platform_price: 299,
            },
            {
                qualified: 40,
                final_price: 3279,
                live_transfer: 67,
                platform_price: 599,
            },
            {
                qualified: 60,
                final_price: 4599,
                live_transfer:65,
                platform_price: 699,
            }
            ]
        },
        {
            id: 2,
            title: '$200K-$300K',
            icon: 'tabitem__icon fas fa-users',
            contents: [{
                qualified: 20,
                final_price: 1879,
                live_transfer: 79,
                platform_price: 299,
            },
            {
                qualified: 40,
                final_price: 3679,
                live_transfer: 77,
                platform_price: 599,
            },
            {
                qualified: 60,
                final_price: 5139,
                live_transfer: 74,
                platform_price: 699,
            }
            ]
        },
        {
            id: 3,
            title: '$300K-$400K',
            icon: 'tabitem__icon fas fa-network-wired',
            contents: [{
                qualified: 20,
                final_price: 100,
                live_transfer: 120,
                platform_price: 61,
            },
            {
                qualified: 30,
                final_price: 1000,
                live_transfer: 120,
                platform_price: 61,
            },
            {
                qualified: 4,
                final_price: 3000,
                live_transfer: 120,
                platform_price: 62,
            }
            ]
        },
        {
            id: 4,
            title: '$400K-$500K',
            icon: 'tabitem__icon fas fa-money-check-alt',
            contents: [{
                qualified: 2,
                final_price: 100,
                live_transfer: 120,
                platform_price: 61,
            },
            {
                qualified: 3,
                final_price: 1000,
                live_transfer: 120,
                platform_price: 61,
            },
            {
                qualified: 4,
                final_price: 3000,
                live_transfer: 120,
                platform_price: 62,
            }
            ]
        },
        {
            id: 5,
            title: '$500K+',
            icon: 'tabitem__icon fas fa-money-check-alt',
            contents: [{
                qualified: 2,
                final_price: 100,
                live_transfer: 120,
                platform_price: 61,
            },
            {
                qualified: 3,
                final_price: 1000,
                live_transfer: 120,
                platform_price: 61,
            },
            {
                qualified: 4,
                final_price: 3000,
                live_transfer: 120,
                platform_price: 62,
            }
            ]
        }
    ];
    const [active, setActive] = useState(3);
    return (
        <TabContainer>
            <div className="wrapper">
                <div className="tabs">
                    {tabItems.map(el => <TabItemComponent
                        key={el.id}
                        idx={el.id}
                        icon={el.icon}
                        title={el.title}
                        onItemClicked={() => setActive(el.id)}
                        isActive={active === el.id}
                    />

                    )}
                </div>
                <div className="content">
                    {tabItems.map(el => <>
                        {el.contents.map((content, index) => { return active === el.id ? <Card qualified={content.qualified} final_price={content.final_price} platform_price={content.platform_price} live_transfer={content.live_transfer} idx={index} /> : '' }
                        )}
                    </>
                    )}
                    <CardEnterprise />
                </div>
            </div>
        </TabContainer>
    );
}

export default Tab

const TabContainer = styled.div`
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;

  }

  body {
    background: #fff;
  }

  .wrapper {
    width: 80vw;
    margin: 30px auto;

  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tabitem {
    cursor: pointer;
    width: 200px;
    height: 5vh;
    text-align: center;
    padding: 15px;
    background: #5a6e8f;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


  .tabitem--inactive {
    opacity: 1;
    background: #f7f7f7;
  }


  .tabitem__title {
    font-size: 18px;
    font-weight: bold;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    align-self:stretch;
    margin-top: 15px;
    font-size: 22px;
  }`;
