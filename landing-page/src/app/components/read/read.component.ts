import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
})
export class ReadComponent {
  isCollapsed: { [key: string]: boolean } = {};

  constructor() {
    this.historias.forEach(historia => {
      this.isCollapsed[historia.id] = true;
    });
  }
  historias = [
    {
      id: 'historia1',
      titulo: 'A Dança das Sombras',
      sinopse: 'Na penumbra das ruas silenciosas de Gelion, Selene "Sombra da Aurora" se movia como um espectro',
      texto: 'Na penumbra das ruas silenciosas de Gelion, Selene "Sombra da Aurora" se movia como um espectro. Seu corpo esguio deslizava entre telhados e vielas, invisível sob o manto da noite. Os ventos do norte sussurravam segredos aos seus ouvidos, e naquela noite em particular, as vozes eram inquietas. Algo obscuro se erguia nas profundezas da cidade. Ela seguiu os rastros de um conselho clandestino, uma assembleia de nobres e mercadores que tramavam nas sombras, vendendo segredos ao inimigo. As ruas de Gelion escondiam horrores, e Selene logo descobriu que entre os conspiradores havia algo mais que simples traidores, seres das trevas, criaturas que se esgueiravam entre os mortais, sedentos pelo caos. Transformando-se em sua forma animal, a pantera branca deslizou pelas sombras, aproximando-se do coração da conspiração. Com a destreza de uma caçadora, neutralizou os vigias e espreitou o conselho, captando cada palavra sussurrada. Quando o momento certo chegou, Selene atacou. Suas adagas brilharam na escuridão, e em um instante, o caos se instaurou. Os traidores foram revelados. A guilda Ventos do Norte, guiada pelas informações de Selene, desmantelou a conspiração e selou o destino de Gelion. A cidade foi salva das garras da corrupção, e a sombra da espiã desapareceu na noite, deixando apenas o eco de seus passos sobre a neve.'
    },
    {
      id: 'historia2',
      titulo: 'Caçadores da Tempestade',
      sinopse: 'Kaelen "Caçador de Relíquias" sentia o cheiro da tempestade antes que ela chegasse',
      texto:'Kaelen "Caçador de Relíquias" sentia o cheiro da tempestade antes que ela chegasse. O vento frio cortava o rosto, sussurrando segredos de um inimigo que sempre escapava. Ele e seu irmão, Eryndor "Lobo Sombrio", estavam há semanas na trilha de um renegado perigoso, um traidor que conhecia os caminhos ocultos de Gelion tão bem quanto eles. Os rastros eram sutis, mas Kaelen os via com sua visão aguçada. De tempos em tempos, assumia a forma de um falcão prateado, sobrevoando as vastas florestas cobertas de neve, buscando qualquer sinal da presa. Eryndor, em sua forma de lobo negro, corria pelas trilhas ocultas, seu faro captando o cheiro do perigo. A perseguição os levou até um desfiladeiro traiçoeiro, onde o inimigo os esperava. Uma emboscada. Mercenários surgiram das sombras, lâminas brilhando sob a lua. Mas os Ventos do Norte não eram presas fáceis. Eryndor atacou primeiro, um borrão negro entre os inimigos, enquanto Kaelen girava sua lâmina com precisão mortal. O vento uivava, e a tempestade finalmente se abateu sobre o campo de batalha. O traidor tentou fugir uma última vez, mas Kaelen já havia previsto seu movimento. Em um salto preciso, interceptou seu alvo, segurando-o antes que desaparecesse novamente. A longa caçada terminava ali. Com um olhar para o céu, Kaelen sentiu o vento acalmar-se. Os Ventos do Norte sopravam mais forte naquela noite, e a justiça havia sido feita.'
    },
    {
      id: 'historia3',
      titulo: 'O Eco dos Antigos',
      sinopse: 'Freya "Tempestade Gélida" não caminhava entre os vivos, mas sentia os ecos do passado como ninguém',
      texto:'Freya "Tempestade Gélida" não caminhava entre os vivos, mas sentia os ecos do passado como ninguém. Era uma noite de lua cheia quando a guilda ouviu seu chamado – um sussurro frio como o vento do norte, guiando-os para as profundezas da floresta de Gelion. Algo estava enterrado ali, um segredo que deveria ter sido esquecido. Seguindo as direções etéreas de Freya, os Ventos do Norte chegaram a um vale onde a neve jamais derretia. No centro, jaziam ruínas antigas, marcadas por símbolos desconhecidos, ressoando com uma energia ancestral. O espírito flutuou entre os vestígios, suas asas translúcidas iluminando inscrições há muito apagadas pelo tempo. Com um murmúrio na língua dos Vëlarim, Freya ativou as runas adormecidas. A terra tremeu, e uma câmara oculta se revelou sob o gelo. Dentro dela, uma cripta esquecida guardava segredos há séculos enterrados – registros de uma civilização perdida e a verdade sobre a origem de Gelion. Entre os pergaminhos, havia menções a um poder que nunca deveria ser despertado. Os olhos cintilantes de Freya refletiam o dilema que pairava sobre a guilda. Revelar tais conhecimentos ao mundo poderia mudar o curso da história, mas libertar forças antigas também poderia condená-los a um destino incerto. O sussurro dos ventos trouxe a resposta – alguns segredos não deveriam ser desenterrados. Assim, os Ventos do Norte deixaram o vale, carregando consigo apenas fragmentos do que haviam encontrado. A verdade continuaria a ecoar, invisível como Freya, um lembrete de que os Antigos nunca estavam realmente adormecidos'
    },
    {
      id: 'historia4',
      titulo: 'O Rugido da Tempestade',
      sinopse: 'Bjorn "Mão de Ferro" sentiu o trovão antes que ele rasgasse o céu',
      texto:'Bjorn "Mão de Ferro" sentiu o trovão antes que ele rasgasse o céu. A tempestade se aproximava, não apenas nos céus, mas no coração da batalha. A guilda fora convocada para proteger uma vila remota das garras de invasores impiedosos – guerreiros sedentos por sangue e destruição. O anão se colocou à frente, escudo erguido como uma muralha inquebrável. Quando os inimigos vieram, ele rugiu como a própria tempestade, sua forma se expandindo até tornar-se um urso pardo colossal. O impacto de sua investida derrubou dezenas, e seu golpe esmagador abriu caminho entre as fileiras inimigas. Enquanto seus companheiros lutavam ao lado dele, Bjorn manteve a linha, um farol de força contra a maré da destruição. O combate foi feroz, mas ao amanhecer, apenas a guilda permanecia de pé. O trovão silenciou, e a tempestade partiu – não sem antes deixar sua marca nos Ventos do Norte.'
    },
    {
      id: 'historia5',
      titulo: 'A Marcha dos Destemidos',
      sinopse: 'Quando os tambores de guerra soaram, os Ventos do Norte se reuniram',
      texto:'Quando os tambores de guerra soaram, os Ventos do Norte se reuniram. Um exército numeroso marchava contra eles, uma força esmagadora que poucos ousariam enfrentar. Mas a guilda não recuaria. Na linha de frente, Bjorn, em sua forma de urso colossal, ergueu-se como uma fortaleza viva. Ao seu lado, Eryndor e Kaelen preparavam-se para o ataque, enquanto Selene desaparecia nas sombras, pronta para agir onde fosse mais letal. Sobrevoando a batalha, Freya observava tudo, seus sussurros guiando a estratégia do grupo. A batalha foi intensa, o choque entre lâminas e garras ecoando pelo vale. Mas os Ventos do Norte eram mais do que guerreiros – eram lendas em movimento. A cada golpe, a cada estratégia bem executada, viravam o rumo da guerra. Com um uivo feroz, Eryndor liderou uma investida, enquanto Kaelen desarmava os líderes inimigos. Selene, letal e invisível, eliminava alvos antes mesmo que percebessem sua presença. No céu, Freya lançou um grito espectral, espalhando terror entre os adversários. No final, contra todas as probabilidades, os Ventos do Norte prevaleceram. A neve estava tingida de vermelho, mas a vitória era deles. O exército que parecia impossível de derrotar havia sido destruído – e uma nova lenda havia nascido.'
    }
  ];



}
