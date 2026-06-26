document.addEventListener('DOMContentLoaded', function() {
  const quantityEl = document.getElementById('quantity');
  if (quantityEl) {
    quantityEl.addEventListener('change', function() {
      const preu = parseInt(this.options[this.selectedIndex].getAttribute('data-preu'));
      const preuOriginal = preu * 3;
      document.getElementById('preu-actual').textContent = preu + '€';
      document.getElementById('preu-original').textContent = preuOriginal + '€';
      document.getElementById('preu-bloc').setAttribute('data-price', preu);
    });
  }
});

(function() {
  const shareBtn = document.getElementById('shareBtn');
  const shareMenu = document.getElementById('shareMenu');
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  const copyFeedback = document.getElementById('copyFeedback');
  const pageUrl = window.location.href;
  const pageTitle = document.title;

  const shareText = 'Mira què he trobat! 👀 ' + pageTitle + ' — ' + pageUrl;

if (document.getElementById('waShareBtn')) {
  document.getElementById('waShareBtn').href = 'https://wa.me/?text=' + encodeURIComponent(shareText);
  document.getElementById('fbShareBtn').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageUrl) + '&quote=' + encodeURIComponent('Mira què he trobat! 👀 ' + pageTitle);
  document.getElementById('xShareBtn').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('Mira què he trobat! 👀 ' + pageTitle + ' — ' + pageUrl);
}
if (shareBtn) {
  shareBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({ title: pageTitle, text: 'Mira què he trobat! 👀', url: pageUrl });
    } else {
      shareMenu.style.display = shareMenu.style.display === 'none' ? 'block' : 'none';
    }
  });
}

  if (copyLinkBtn) {
  copyLinkBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(pageUrl).then(function() {
      shareMenu.style.display = 'none';
      copyFeedback.style.display = 'inline';
      setTimeout(function() { copyFeedback.style.display = 'none'; }, 2500);
    });
  });
}

  document.addEventListener('click', function(e) {
    if (!shareBtn.contains(e.target) && !shareMenu.contains(e.target)) {
      shareMenu.style.display = 'none';
    }
  });
})();

// =============================================
// 1. IDENTIFICACIÓ DEL PRODUCTE I GUIA DE TALLES
// =============================================
window.onload = function() {
    let path = window.location.pathname;
    let nomFitxer = path.split("/").pop(); 
    if (!nomFitxer) return;

    let idProducte = nomFitxer.replace("producte-", "").replace(".html", "").trim();
    
    if (document.getElementById("pagina")) {
        document.getElementById("pagina").value = idProducte;
    }

    // Grups i talles disponibles (mantinc el que ja tenies)
    const grupProv1 = ["1", "4", "34"];
    const grupProv2 = ["2", "3", "3-2", "18", "36", "35"];
    const grupDessuadores = ["41", "42"];

    const tallesP1 = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
    const tallesEstandard = ["S", "M", "L", "XL", "2XL", "3XL"];

// Contingut de les taules
    const taules = {
        prov1: `
            <table class="tabla-talles">
                <thead>
                    <tr>
                        <th>Talla</th><th>Pit</th><th>Espatlla</th><th>Màniga</th><th>Llarg</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><b>XS</b></td><td>88cm</td><td>40cm</td><td>19cm</td><td>64cm</td></tr>
                    <tr><td><b>S</b></td><td>94cm</td><td>42cm</td><td>19cm</td><td>67cm</td></tr>
                    <tr><td><b>M</b></td><td>100cm</td><td>44cm</td><td>20cm</td><td>70cm</td></tr>
                    <tr><td><b>L</b></td><td>106cm</td><td>46cm</td><td>20cm</td><td>73cm</td></tr>
                    <tr><td><b>XL</b></td><td>112cm</td><td>50cm</td><td>20cm</td><td>75cm</td></tr>
                    <tr><td><b>XXL</b></td><td>118cm</td><td>52cm</td><td>21cm</td><td>77cm</td></tr>
                    <tr><td><b>3XL</b></td><td>124cm</td><td>54cm</td><td>22cm</td><td>79cm</td></tr>
                </tbody>
            </table>
            <span class="nota-talles">* Mesures basades en el contorn total. Alçada recomanada: 160-195cm.</span>`,

        prov2: `
            <table class="tabla-talles">
                <thead>
                    <tr>
                        <th style="background:#444">Talla</th><th style="background:#444">Pit</th><th style="background:#444">Llarg</th><th style="background:#444">Pes Suggerit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><b>S</b></td><td>96cm</td><td>67cm</td><td>55kg</td></tr>
                    <tr><td><b>M</b></td><td>100cm</td><td>69cm</td><td>60kg</td></tr>
                    <tr><td><b>L</b></td><td>106cm</td><td>71cm</td><td>70kg</td></tr>
                    <tr><td><b>XL</b></td><td>112cm</td><td>73cm</td><td>80kg</td></tr>
                    <tr><td><b>2XL</b></td><td>118cm</td><td>75cm</td><td>90kg</td></tr>
                    <tr><td><b>3XL</b></td><td>124cm</td><td>77cm</td><td>100kg</td></tr>
                </tbody>
            </table>
            <span class="nota-talles">* Tallatge estàndard europeu.</span>`,

        dessuadora: `
            <table class="tabla-talles">
                <thead>
                    <tr>
                        <th style="background:#000">Talla</th><th style="background:#000">Pit</th><th style="background:#000">Llarg</th><th style="background:#000">Màniga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><b>S</b></td><td>100cm</td><td>65cm</td><td>61cm</td></tr>
                    <tr><td><b>M</b></td><td>104cm</td><td>67cm</td><td>62cm</td></tr>
                    <tr><td><b>L</b></td><td>108cm</td><td>69cm</td><td>63cm</td></tr>
                    <tr><td><b>XL</b></td><td>112cm</td><td>71cm</td><td>64cm</td></tr>
                    <tr><td><b>XXL</b></td><td>116cm</td><td>73cm</td><td>65cm</td></tr>
                    <tr><td><b>3XL</b></td><td>120cm</td><td>75cm</td><td>66cm</td></tr>
                </tbody>
            </table>
            <span class="nota-talles">* Recomanem demanar una talla més si t'agrada l'estil "oversize".</span>`
    };

    // Assignació de taula i talles (es queda igual)
    let taulaFinal = "";
    let tallesAUsar = [];

    if (grupProv1.includes(idProducte)) {
        taulaFinal = taules.prov1;
        tallesAUsar = tallesP1;
    } else if (grupProv2.includes(idProducte)) {
        taulaFinal = taules.prov2;
        tallesAUsar = tallesEstandard;
    } else if (grupDessuadores.includes(idProducte)) {
        taulaFinal = taules.dessuadora;
        tallesAUsar = tallesEstandard;
    }

    // Mostrar guia de talles i selector (es queda igual)
    if (taulaFinal !== "") {
        const wrapper = document.getElementById('wrapperGuia');
        if (wrapper) {
            wrapper.style.setProperty('display', 'block', 'important');
            const btnGuia = document.getElementById('btnGuiaTalles');
            if (btnGuia) {
                btnGuia.onclick = function() {
                    Swal.fire({
                        title: 'Guia de talles (cm)',
                        html: `<div style="margin-top:15px;">${taulaFinal}</div>`,
                        confirmButtonColor: '#800000',
                        confirmButtonText: 'Tancar'
                    });
                };
            }
        }

        const campTalla = document.getElementById('campTalla');
        const selectTalla = document.getElementById('Talla');
        if (campTalla && selectTalla) {
            campTalla.style.display = 'block';
            tallesAUsar.forEach(talla => {
                let opt = document.createElement('option');
                opt.value = talla;
                opt.textContent = talla;
                selectTalla.appendChild(opt);
            });
        }
    }
};

// =============================================
// 2. GESTIÓ DEL FORMULARI + SWEETALERT (CORREGIT)
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    const botoCompra = document.querySelector('.form-button button');
    if (!botoCompra) return;

    botoCompra.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        const form = document.querySelector('form.form-container');
        if (!form) return;

        // Dades bàsiques
        const selectTalla = document.getElementById('Talla');
        const campTallaVisible = document.getElementById('campTalla')?.style.display === 'block';
        const tallaEscollida = campTallaVisible && selectTalla ? selectTalla.value : null;

        let tipusSeleccionat = document.querySelector('input[name="Tipus"]:checked')?.value;
        if (!tipusSeleccionat) {
            const campOcultTipus = document.getElementById('product-type');
            if (campOcultTipus) tipusSeleccionat = campOcultTipus.value;
        }

        const selectJugador = document.getElementById('Jugador');
        const jugadorEscollit = selectJugador ? selectJugador.value : null;

        const h6Element = document.querySelector('.right-content h6');
        const colorProducte = h6Element?.dataset.color;

        // ==================== MESURES DE BANDERES (CORREGIT - EXCLUIR PAL EXTENSIBLE) ====================
        let mesuresBanderes = null;
        const nomFitxer = window.location.pathname.split("/").pop().replace(".html", "");

        // Llista de productes que SÓN banderes (només aquests tindran mesures)
        const productesBanderes = ["8", "22"];   // Afegeix aquí més IDs de banderes si en tens (ex: "23", "24", ...)

        // Comprovar si el producte actual és una bandera
        const esBandera = productesBanderes.some(id => {
            return nomFitxer === id || 
                   nomFitxer === id + "-2" || 
                   nomFitxer === id + "-3" ||
                   nomFitxer.startsWith(id + "-");
        });

        if (esBandera) {
            if (nomFitxer.endsWith("-3")) {
                mesuresBanderes = "120x180cm";
            } else if (nomFitxer.endsWith("-2")) {
                mesuresBanderes = "90x150cm";
            } else {
                mesuresBanderes = "60x90cm";
            }
        }
        // Si no és bandera (com el producte-15), mesuresBanderes es queda null → no surt al SweetAlert
        // ==================== NOM NET DEL PRODUCTE ====================
        let nomProducte = document.querySelector('.right-content h4')?.innerText || "Producte";
        nomProducte = nomProducte.replace(/\s+\d+x\d+cm.*$/, '').trim();

        // Validacions
        const grupsObligatoris = ["1", "2", "3", "3-2", "4", "18", "34", "35", "36", "41", "42"];
        const idActual = document.getElementById("pagina")?.value;

        if (grupsObligatoris.includes(idActual) && !tallaEscollida) {
            Swal.fire({ 
                title: 'Talla necessària', 
                text: 'Aquest producte requereix seleccionar una talla per continuar.', 
                icon: 'warning', 
                confirmButtonColor: '#800000' 
            });
            return;
        }

        if (document.getElementsByName('Tipus').length > 0 && !tipusSeleccionat) {
            Swal.fire({ 
                title: 'Falta informació', 
                text: 'Si us plau, selecciona un tipus.', 
                icon: 'warning', 
                confirmButtonColor: '#800000' 
            });
            return;
        }

        if (selectJugador && !jugadorEscollit) {
            Swal.fire({ 
                title: 'Falta jugador', 
                text: 'Has de seleccionar un jugador de la llista.', 
                icon: 'warning', 
                confirmButtonColor: '#800000' 
            });
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Càlcul preu
        const quantitat = parseInt(document.getElementById('quantity').value) || 1;
        const preuUnitari = parseFloat(h6Element?.dataset.price) || 0;
const preuFix = h6Element?.dataset.preuFix === 'true';
const preuTotal = preuFix 
    ? preuUnitari.toFixed(2).replace('.', ',')
    : (quantitat * preuUnitari).toFixed(2).replace('.', ',');

        // Resum extra
        let extresHtml = '';
        if (tallaEscollida) extresHtml += `<div class="swal-details-row"><span class="swal-label">Talla</span><span class="swal-value">${tallaEscollida}</span></div>`;
        if (tipusSeleccionat) extresHtml += `<div class="swal-details-row"><span class="swal-label">Tipus</span><span class="swal-value">${tipusSeleccionat}</span></div>`;
        if (jugadorEscollit) extresHtml += `<div class="swal-details-row"><span class="swal-label">Jugador</span><span class="swal-value">${jugadorEscollit}</span></div>`;
        if (colorProducte) extresHtml += `<div class="swal-details-row"><span class="swal-label">Color</span><span class="swal-value">${colorProducte}</span></div>`;
        if (mesuresBanderes) extresHtml += `<div class="swal-details-row"><span class="swal-label">Mesures</span><span class="swal-value">${mesuresBanderes}</span></div>`;

        // SweetAlert
        Swal.fire({
            html: `
            <div class="swal-custom-html-container">
                <div class="swal-header-custom">
                    <div class="swal-icon-cart-wrapper">🛒</div>
                    <p class="swal-title-custom">Confirmar comanda</p>
                    <p class="swal-subtitle-custom">Revisa els detalls de la teva selecció</p>
                </div>

                <div class="swal-body-custom">
                    <p class="swal-section-title">Resum de la compra</p>
                    <div class="swal-details-row">
                        <span class="swal-label">Producte</span>
                        <span class="swal-value">${nomProducte}</span>
                    </div>
                    ${extresHtml}
                    <div class="swal-details-row">
                        <span class="swal-label">Quantitat</span>
                        <span class="swal-value">${quantitat} unitat${quantitat > 1 ? 's' : ''}</span>
                    </div>

                    <div class="swal-total-block">
                        <span class="swal-total-label">TOTAL</span>
                        <span class="swal-total-amount">${preuTotal} €</span>
                    </div>
                    
                    <div class="swal-shipping-note">
                        L'enviament es gestionarà un cop enviat el formulari. Ens posarem en contacte amb tu.
                    </div>
                </div>

                <div class="swal-actions-custom">
                    <button id="custom-cancel" class="swal-btn-cancel-custom">Enrere</button>
                    <button id="custom-confirm" class="swal-btn-confirm-custom">
                        <div class="swal-confirm-btn-inner">
                            <span class="swal-check-icon">✓</span>
                            <span>Enviar comanda</span>
                        </div>
                    </button>
                </div>
            </div>`,
            showConfirmButton: false,
            allowOutsideClick: false,
            customClass: {
                popup: 'swal-custom-popup-clean',
                htmlContainer: 'swal-no-padding'
            },
            didOpen: () => {
                document.getElementById('custom-confirm').addEventListener('click', () => {
                    Swal.close();
                    form.submit();
                });
                document.getElementById('custom-cancel').addEventListener('click', () => {
                    Swal.close();
                });
            }
        });
    });
});

// =============================================
// 3. ROTACIÓ D'IMATGES
// =============================================
document.addEventListener("DOMContentLoaded", () => {

    function startRotation(imgId, imageList, intervalTime = 2000, priceElement = null, crossedElement = null, labelV = null, labelNoV = null) {
        const img = document.getElementById(imgId);
        if (!img) return;

        let current = 0;

        setInterval(() => {
            current = (current + 1) % imageList.length;
            img.src = imageList[current];

            // Canvi de preu per productes 35 i 39
            if (priceElement && crossedElement) {
                if (imageList[current].includes("v35.webp") || imageList[current].includes("v39.webp")) {
                    priceElement.textContent = "15€";
                    crossedElement.textContent = "20€";
                } else {
                    priceElement.textContent = "17,5€";
                    crossedElement.textContent = "25€";
                }
            }

            // Canvi d'etiqueta per la gorra (producte 3)
            if (labelV && labelNoV) {
                if (imageList[current].includes("v3.4")) {
                    labelV.style.display = "inline";
                    labelNoV.style.display = "none";
                } else {
                    labelV.style.display = "none";
                    labelNoV.style.display = "inline";
                }
            }
        }, intervalTime);
    }

    // Llista de rotacions
    startRotation("rotating-image-32", ["assets/images/v32.webp", "assets/images/v33.webp"]);
    startRotation("rotating-image-43", ["assets/images/v43.webp", "assets/images/v43.1.webp", "assets/images/v43.2.webp"]);
    startRotation("rotating-image-55", ["assets/images/v55.webp", "assets/images/v55.1.webp", "assets/images/v55.2.webp"]);
    startRotation("rotating-image-20", ["assets/images/v20.webp", "assets/images/v21.webp"]);
    startRotation("rotating-image-13", ["assets/images/v13.webp", "assets/images/v19.webp"]);

    // Producte 35 amb preu
    const precio35 = document.getElementById("precio-35");
    const tachado35 = document.getElementById("tachado-35");
    startRotation("rotating-image-35", ["assets/images/v35.webp", "assets/images/v36.webp"], 2000, precio35, tachado35);

    // Producte 39 amb preu
    const precio39 = document.getElementById("precio-39");
    const tachado39 = document.getElementById("tachado-39");
    startRotation("rotating-image-39", ["assets/images/v39.webp", "assets/images/v40.webp"], 2000, precio39, tachado39);

    // Producte 3 amb etiqueta
    const etiquetaV3 = document.getElementById("etiqueta-v3");
    const etiquetaNoV3 = document.getElementById("etiqueta-no-v3");
    startRotation("rotating-image-3", ["assets/images/v3.webp", "assets/images/v3.4.webp"], 2000, null, null, etiquetaV3, etiquetaNoV3);

});