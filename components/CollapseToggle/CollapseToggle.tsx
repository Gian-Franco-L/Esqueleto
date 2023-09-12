'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CollapseToggleStyle from "@/styles/CollapseToggle/CollapseToggle.module.css"

interface PageTypes{
  option: string
}
function CollapseToggle({ option } : PageTypes) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{width: '100%', color: 'black', textAlign: 'left', backgroundColor: 'transparent', borderRadius: '0px', borderTop: '1px solid black', borderBottom: 'none', borderRight: 'none', borderLeft: 'none' }}
      >
        {option}
      </Button>
      <Collapse in={open}>
        {
          option === 'Products'
            ? <div id="example-collapse-text">
                <a className={CollapseToggleStyle.itemCollapse} href="">Producto1</a>
                <a className={CollapseToggleStyle.itemCollapse} href="">Producto2</a>
                <a className={CollapseToggleStyle.itemCollapse} href="">Producto3</a>
              </div>
            : option === 'Marcas'
                ? <div id="example-collapse-text">
                    <a className={CollapseToggleStyle.itemCollapse} href="">Marca1</a>
                    <a className={CollapseToggleStyle.itemCollapse} href="">Marca2</a>
                    <a className={CollapseToggleStyle.itemCollapse} href="">Marca3</a>
                  </div>
                : <div id="example-collapse-text">
                    <a href="" className={CollapseToggleStyle.itemCollapse}>Contacto</a>
                    <a href="" className={CollapseToggleStyle.itemCollapse}>Ofertas</a>
                  </div>
        }
      </Collapse>
    </>
  );
}

export default CollapseToggle;