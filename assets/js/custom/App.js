import Settings from './Configuracoes.js';

const SMTHEMESFUNCTIONS = {

    enviarMensagemWhatsapp(){

        $('#contact-form').on('submit', function(e){
            e.preventDefault();
            let itemsForm = [...$(this)[0].elements]
            window.arrayTxt = [];

            itemsForm.forEach((item)=>{
                if(item.type !== 'submit'){
                    if($(item).val()){
                        if($(item).val().length > 2){
                            let key = $(item).attr('data-item')
                            let value = $(item).val()
                            arrayTxt.push(`*${key}:* ${value}`);
                        }
                    }
                }
            });
            let domain = screen.width > 767 ? 'web' : 'api';
            window.open(`https://${domain}.whatsapp.com/send?phone=558188185372&text=${arrayTxt.join('%0a')}`);
        });

        // adjust item select
        $('select.adjust-item').change(function(){
            console.log('xxx');
            $(this).removeClass('no-value')
        });

    },

    accordionCustomizada(){
        $(document).on('click', '.accordion_item .accordion_target', function(){
            $(this).toggleClass('accordion_active');
            $(this).parents('.accordion_item').find('.accordion_content').slideToggle(500);
        });
    },

    // Renderiza Portfolio
    renderizarPortFolio(){

        let HTMPortfolio = Settings.PortFolio.map(item=>{
            return `
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-work text-center mb-25">
                    <div class="work-image">
                        <img src="${item.image}" alt="${item.name}" title="${item.name}">
                    </div>
                    <div class="work-overlay">
                        <a class="thumb-platform" href="${item.url}" target="_blank" title="Loja Integrada">
                            <img src="https://integrando.se//Store/assets/images/svg-lojaintegrada.svg" alt="Loja Integrada">
                        </a>

                        <div class="work-content">
                            <h3 class="work-title">${item.name}</h3>
                            <ul>
                                <li><a class="image-popup" href="${item.url}" target="_blank">Ver mais <i class="lni ml-1 lni-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

        $('#content_portfolio').html(HTMPortfolio);
    }
}








SMTHEMESFUNCTIONS.renderizarPortFolio();

SMTHEMESFUNCTIONS.accordionCustomizada();

SMTHEMESFUNCTIONS.enviarMensagemWhatsapp();