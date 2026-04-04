<motion.section
  initial={{ y: 25, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.75, delay: 0.4 }}
  className="container flex flex-col md:flex-row mx-auto min-h-screen w-full mt-2"
>
  <div className="md:w-6/12 m-6 h-2/3">
    <Image
      src={aboutImg}
      alt="Profesjonalne usługi budowlane Piaseczno"
      height={600}
      className="mx-auto"
    />
  </div>
  <div className="md:w-6/12 m-6 font-medium text-gray-800">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      O firmie Pink Helmet
    </h2>
    <p className="mb-4">
      Pink Helmet Karolina Szuba powstała w maju 2023 roku z pasji do budownictwa i chęci zapewnienia klientom profesjonalnej
      i rzetelnej obsługi inwestycji. Działamy głównie na terenie Piaseczna, Warszawy i okolicznych miejscowości.
    </p>

    <p className="mb-4">
      Za sukcesem Pink Helmet stoi doświadczony zespół, który łączy wiedzę techniczną z praktyką,
      dbając o jakość, bezpieczeństwo i estetykę realizacji. Naszym celem jest również, aby współpraca
      była komfortowa i bezstresowa – każdy klient traktowany jest indywidualnie.
    </p>

    <p className="mb-4">
      Właścicielka Karolina Szuba jest absolwentką <strong>Politechniki Warszawskiej</strong> na kierunku Inżynieria Środowiska
      oraz studiów podyplomowych menedżerskich w <strong>Szkole Głównej Handlowej</strong>. Jej doświadczenie pozwala łączyć
      wiedzę techniczną z umiejętnościami zarządzania projektami budowlanymi i wykończeniowymi.
    </p>

    <p className="mb-4">
      Pink Helmet to firma, która wierzy w wysoką jakość, terminowość i transparentną komunikację. Dla nas najważniejsze
      jest, aby klient mógł spokojnie obserwować postęp prac, mając pewność, że jego inwestycja jest w dobrych rękach.
    </p>
  </div>
</motion.section>
