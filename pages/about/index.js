<motion.section
  initial={{ y: 25, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.75, delay: 0.4 }}
  className="container flex flex-col md:flex-row mx-auto min-h-screen w-full mt-2"
>
  <div className="md:w-6/12 md:8/12 m-6 h-2/3">
    <Image
      src={aboutImg}
      alt="Profesjonalne usługi budowlane Piaseczno"
      height={600}
      className="mx-auto"
    />
  </div>

  <div className="md:w-6/12 m-6 font-medium text-gray-800">

    <p className="mb-4">
      Firma Pink Helmet Karolina Szuba powstała w maju 2023 roku z pasji do budownictwa
      oraz chęci tworzenia usług opartych na rzetelności, wiedzy technicznej i dobrej
      komunikacji z klientem. Firma działa głównie na terenie Piaseczna, Warszawy
      oraz okolicznych miejscowości.
    </p>

    <p className="mb-4">
      Wraz z rozwojem firmy w marcu 2024 roku marka Pink Helmet została podzielona
      na dwa podmioty. Pink Helmet Karolina Szuba realizuje usługi inżynieryjne
      związane z budownictwem, natomiast Pink Helmet Sp. z o.o. zajmuje się
      realizacją remontów oraz wykończeń wnętrz mieszkań i domów.
    </p>

    <p className="mb-4">
      Właścicielką firmy jest Karolina Szuba – absolwentka
      <strong> Politechniki Warszawskiej </strong>
      na kierunku Inżynieria Środowiska oraz studiów podyplomowych
      menedżerskich w
      <strong> Szkole Głównej Handlowej w Warszawie</strong>.
      Wieloletnie doświadczenie zawodowe pozwoliło jej połączyć wiedzę
      techniczną z umiejętnościami zarządzania projektami.
    </p>

    <p className="mb-4">
      Ideą Pink Helmet jest budowanie marki, która kojarzy się z wysoką
      jakością usług, terminowością oraz profesjonalnym podejściem do
      każdej inwestycji. Celem firmy jest pokazanie, że prace budowlane
      mogą przebiegać w sposób uporządkowany, przewidywalny i bez
      niepotrzebnego stresu dla inwestora.
    </p>

  </div>
</motion.section>
