import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CTAbtn = styled.div`
    position: relative;
    padding: 4px 40px 4px 8px;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;

    &:after {
        content: '▾';
        position: absolute;
        border-left: 1px solid black;
        background-color: lightgray;
        border-radius: 0 4px 4px 0;
        top: 0;
        height: 100%;
        right: 0;
        display: flex;
        align-items: center;
        padding: 0 2px;
    }
`;

const Menu = styled.div`
    display: ${(props) => (props.open ? 'flex' : 'none')};
    position: absolute;
    flex-direction: column;
    background-color: white;
    border: 1px solid black;
    align-items: stretch;
    top: 110%;
    left: 0;
    user-select: none;
`;

const MenuOption = styled.div`
    font-size: 14px;
    border-bottom: 1px solid black;
    text-align: center;
    user-select: none;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background-color: lightgray;
    }
`;

const Wrapper = styled.div`
    position: relative;
`;

const menuOptions = [
    'Koupit zrychlene',
    'Porovnat',
    'Hlídat',
    'Přidat do seznamu',
];

function ItemCTAbtn({ item }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const ref = useRef();

    const onCTAbtnClick = () => {
        !menuOpen && setSelectedItem(item.id);
        setMenuOpen((prev) => !prev);
    };

    const onMenuOptionClick = (text) => {
        console.log('action:', text, ' on item with id: ', selectedItem);
        setMenuOpen(false);
        setSelectedItem(null);
    };

    // hide Menu if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
    return (
        <Wrapper>
            <CTAbtn onClick={onCTAbtnClick}>
                <span>Koupit</span>
            </CTAbtn>
            <Menu open={menuOpen} ref={ref}>
                {menuOptions.map((text, i) => (
                    <MenuOption key={i} onClick={() => onMenuOptionClick(text)}>
                        {text}
                    </MenuOption>
                ))}
            </Menu>
        </Wrapper>
    );
}

export default ItemCTAbtn;
