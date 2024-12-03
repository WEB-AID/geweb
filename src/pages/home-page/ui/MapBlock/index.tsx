const Map = () => {
    return (
        <div className="flex items-center justify-center my-8">
            <div className="TEXT w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium minima atque consequuntur ipsa ex quisquam possimus
                amet ipsum dolore fugit animi voluptates ab sapiente vero nam
                placeat alias, perferendis doloremque libero eos molestias
                recusandae a nulla. Molestias accusamus omnis et explicabo!
                Dolorum consequuntur eaque quod dolore sapiente asperiores
                doloribus, nam, ducimus fuga illo tempora dignissimos omnis
                voluptate, at temporibus quam!
            </div>
            <div className="h-96 w-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13376.617626814921!2d44.43961131019164!3d41.463423518722664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4043eb7a014c0f17%3A0x71c96f892c224569!2sAkaurta%20pig%20farm!5e1!3m2!1sru!2sua!4v1733056020151!5m2!1sru!2sua"
                    width="300"
                    height="300"
                    className="border-0"
                    // allowfullscreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Map
