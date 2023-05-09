import React from 'react'

const Menu = () => {
  return (
    <div className='grid grid-cols-1 bg-little_lemon_green text-little_lemon_gray-light rounded-2xl w-2/3 mx-auto my-5'>
      <div>
        <h1 className='grid justify-center text-4xl pt-5'>Menu</h1>
      </div>
      <hr class='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <p className='flex mx-auto'>Sunday-Thursday 4-9pm, Friday-Saturday 4-10pm </p>
      <hr class='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <div className='px-8 py-3 mx-auto'>
        <h1 className='grid text-2xl text-bold italic justify-center my-5'>Antipasti</h1>
        <div className='grid grid-cols-2'>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Ravanello</h2>
            <h3 className='text-right text-sm'>$14.00</h3>
            <p className='col-span-2 text-xs mb-3'>Butter lettuce, radish, pickled grape, chive, tarragon, buttermilk vinaigrette</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Arancini</h2>
            <h3 className='text-right text-sm'>$18.00</h3>
            <p className='col-span-2 text-xs mb-3'>Mushroom risotto fritto, English pea, tarragon, marsala fonduta</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Verde Misto</h2>
            <h3 className='text-right text-sm'>$15.00</h3>
            <p className='col-span-2 text-xs mb-3'>Mixed green panzanella, salametto, fresh mozzarella, cherry tomato, artichoke, piquanté pepper, red wine vinagrette</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Bruschetta</h2>
            <h3 className='text-right text-sm'>$16.00</h3>
            <p className='col-span-2 text-xs mb-3'>Chickpea purée, preserved citrus, pistachio-sesame dukkah, Green olive tapenade, house bread</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Burrata</h2>
            <h3 className='text-right text-sm'>$20.00</h3>
            <p className='col-span-2 text-xs mb-3'>Mission fig conserva, pickled fennel, arugula, toasted chestnut, chestnut honey, everything cracker</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Polpo</h2>
            <h3 className='text-right text-sm'>$18.00</h3>
            <p className='col-span-2 text-xs mb-3'>Braised octopus, black garlic skordalia, Spanish chorizo, Yukon gold potato, braised pepper, pangratatto</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Polpettine</h2>
            <h3 className='text-right text-sm'>$16.00</h3>
            <p className='col-span-2 text-xs mb-3'>Beef and pork meatballs, green olive-tomato sauce, smoked mozzarella, gremolata</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Pane</h2>
            <h3 className='text-right text-sm'>$3.50</h3>
            <p className='col-span-2 text-xs mb-3'>House focaccia, house-infused olive oil</p>
          </div>
        </div>
        <hr class='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
      </div>
      <div className='px-8'>
        <h1 className='grid text-xl text-bold italic justify-center my-5'>Pasta</h1>
        <div className='grid grid-cols-2'>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Cavatelli</h2>
            <h3 className='text-right text-sm'>$21.00</h3>
            <p className='col-span-2 text-xs mb-3'>English pea pesto, pancetta, pea vine, pistachio, stracciatella</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Bucatini</h2>
            <h3 className='text-right text-sm'>$21.00</h3>
            <p className='col-span-2 text-xs mb-3'>Prawn, Calabrian soffritto, anchovy, garlic, oregano, pangratatto</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Orecchiette al Forno</h2>
            <h3 className='text-right text-sm'>$32.00</h3>
            <p className='col-span-2 text-xs mb-3'>Fennel sausage, broccoli rabe, goat horn pepper, oregano, Pecorino</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Rigatoni Bolognese</h2>
            <h3 className='text-right text-sm'>$21.00</h3>
            <p className='col-span-2 text-xs mb-3'>Pork and beef sugo, tomato, chili, rosemary, mascarpone, Pecorino</p>
          </div>
        </div>
        <hr class='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
      </div>
      <div className='px-8 mx-auto'>
        <h1 className='grid text-xl text-bold italic justify-center my-5'>Secondi</h1>
        <div className='grid grid-cols-2'>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Costola</h2>
            <h3 className='text-right text-sm'>$44.00</h3>
            <p className='col-span-2 text-xs mb-3'>Pork short rib, balsamic glaze, gorgonzola polenta, haricot vert, stone fruit mostarda</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Lasagna</h2>
            <h3 className='text-right text-sm'>$30.00</h3>
            <p className='col-span-2 text-xs mb-3'>Pork and beef ragù, ricotta, tomato, béchamel, Grana Padano</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Ippoglosso</h2>
            <h3 className='text-right text-sm'>$44.00</h3>
            <p className='col-span-2 text-xs mb-3'>Halibut, Manila clam, spring pea, fava bean, piquillo pepper, pickled onion</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Pollo Saltimbocca</h2>
            <h3 className='text-right text-sm'>$40.00</h3>
            <p className='col-span-2 text-xs mb-3'>Roasted chicken, prosciutto, fregola sarda, blistered tomato, fried sage, caramelized lemon jus</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Melanzane</h2>
            <h3 className='text-right text-sm'>$29.00</h3>
            <p className='col-span-2 text-xs mb-3'>Eggplant involtini, ricotta, basil, tomato, capellini aglio e olio</p>
          </div>
        </div>
        <hr class='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
      </div>
      <div className='px-8 mx-auto'>
        <h1 className='grid text-xl text-bold italic justify-center my-5'>Dolci</h1>
        <div className='grid grid-cols-2'>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Cioccolato</h2>
            <h3 className='text-right text-sm'>$12.00</h3>
            <p className='col-span-2 text-xs mb-3'>Chocolate mint ganache, vanilla sugar cookie crust, fresh cream, chocolate shortbread crumble, salted caramel crisp</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Affogato</h2>
            <h3 className='text-right text-sm'>$10.00</h3>
            <p className='tcol-span-2 text-xs mb-3'>Vanilla gelato, espresso, biscotti</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Torta</h2>
            <h3 className='text-right text-sm'>$12.00</h3>
            <p className='col-span-2 text-xs mb-3'>Lemon cheesecake, cherry preserve, house made graham cracker crust, meringue baton, roasted almond</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Lemon Cake</h2>
            <h3 className='text-right text-sm'>$10.00</h3>
            <p className='col-span-2 text-xs mb-3'>Lemon sponge, fresh raspberries, whipped cream</p>
          </div>
          <div className='grid grid-cols-2 mx-3'>
            <h2 className='text-bold'>Biscotti</h2>
            <h3 className='text-right text-sm'>$8.00</h3>
            <p className='col-span-2 text-xs mb-3'>Assorted Italian cookies</p>
          </div>
        </div>
        <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
      </div>
    </div>
  )
}

export default Menu
