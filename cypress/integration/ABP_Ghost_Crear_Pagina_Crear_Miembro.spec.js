import LoginPage from "../support/loginPage";
import ProfilePage from "../support/profilePage";
import PagesSection from "../support/pagesSection";
import CreateMemberPage from "../support/createMember";

const { faker } = require("@faker-js/faker");


const loginPage = new LoginPage();
const profilePage = new ProfilePage();
const port = 2368;
const userAdmin = "jc.pupo@uniandes.edu.co";
const userPassword = "poloadmin1";


//#region  data generada desde mockaroo.com

let jsonDataPagina=[{
    "titulo": "Death of a Bureaucrat (La muerte de un burócrata)",
    "contenido": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "id": 1
  }, {
    "titulo": "Goodbye World",
    "contenido": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "id": 2
  }, {
    "titulo": "Bobby",
    "contenido": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "id": 3
  }, {
    "titulo": "Snow White: A Tale of Terror",
    "contenido": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "id": 4
  }, {
    "titulo": "Therese Raquin (a.k.a. Adultress, The)",
    "contenido": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "id": 5
  }, {
    "titulo": null,
    "contenido": null,
    "id": 6
  }, {
    "titulo": "Pokémon Heroes",
    "contenido": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "id": 7
  }, {
    "titulo": "Babylon 5",
    "contenido": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "id": 8
  }, {
    "titulo": "(╯°□°）╯︵ ┻━┻)",
    "contenido": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    "id": 9
  }, {
    "titulo": "Feast",
    "contenido": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    "id": 10
  }, {
    "titulo": "Natural Born Killers",
    "contenido": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "id": 11
  }, {
    "titulo": "Virginia City",
    "contenido": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "id": 12
  }, {
    "titulo": "Time of Roses (Ruusujen aika)",
    "contenido": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "id": 13
  }, {
    "titulo": "Monday Morning (Lundi matin)",
    "contenido": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "id": 14
  }, {
    "titulo": null,
    "contenido": null,
    "id": 15
  }, {
    "titulo": "Charlotte Sometimes",
    "contenido": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "id": 16
  }, {
    "titulo": null,
    "contenido": null,
    "id": 17
  }, {
    "titulo": "Fish Story (Fisshu sutôrî)",
    "contenido": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "id": 18
  }, {
    "titulo": "Iron Monkey (Siu nin Wong Fei-hung ji: Tit Ma Lau)",
    "contenido": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "id": 19
  }, {
    "titulo": "Imagine Me & You",
    "contenido": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "id": 20
  }, {
    "titulo": "Sunset Blvd. (a.k.a. Sunset Boulevard)",
    "contenido": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "id": 21
  }, {
    "titulo": "The Jackie Robinson Story",
    "contenido": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "id": 22
  }, {
    "titulo": "Asthenic Syndrome, The (Astenicheskiy sindrom)",
    "contenido": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "id": 23
  }, {
    "titulo": "Secret Honor",
    "contenido": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "id": 24
  }, {
    "titulo": "Phyllis and Harold",
    "contenido": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "id": 25
  }, {
    "titulo": "Disraeli",
    "contenido": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    "id": 26
  }, {
    "titulo": "Ten Canoes",
    "contenido": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "id": 27
  }, {
    "titulo": "Colourful (Karafuru)",
    "contenido": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "id": 28
  }, {
    "titulo": "Icicle Thief, The (Ladri di saponette)",
    "contenido": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "id": 29
  }, {
    "titulo": "Breach",
    "contenido": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "id": 30
  }, {
    "titulo": "Bang the Drum Slowly",
    "contenido": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "id": 31
  }, {
    "titulo": "Napoleon and Samantha",
    "contenido": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "id": 32
  }, {
    "titulo": "G@me",
    "contenido": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "id": 33
  }, {
    "titulo": "Devil's Nightmare, The (Plus longue nuit du diable, La)",
    "contenido": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "id": 34
  }, {
    "titulo": null,
    "contenido": null,
    "id": 35
  }, {
    "titulo": null,
    "contenido": null,
    "id": 36
  }, {
    "titulo": "Wasteland",
    "contenido": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "id": 37
  }, {
    "titulo": "Quai des Orfèvres (Jenny Lamour)",
    "contenido": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "id": 38
  }, {
    "titulo": "Scarlet Letter, The",
    "contenido": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "id": 39
  }, {
    "titulo": "Cesar Chavez",
    "contenido": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "id": 40
  }, {
    "titulo": "Song of Ceylon, The",
    "contenido": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "id": 41
  }, {
    "titulo": "Gantz: Perfect Answer",
    "contenido": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "id": 42
  }, {
    "titulo": "Dead Ringers",
    "contenido": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "id": 43
  }, {
    "titulo": "In the Edges: The 'Grizzly Man' Session ",
    "contenido": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "id": 44
  }, {
    "titulo": "Jungo Goes Bananas: Jungo III (Jungledyret Hugo: Fræk, flabet og fri)",
    "contenido": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "id": 45
  }, {
    "titulo": "Love is Eternal While It Lasts",
    "contenido": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "id": 46
  }, {
    "titulo": "On Deadly Ground",
    "contenido": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "id": 47
  }, {
    "titulo": "Flightplan",
    "contenido": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "id": 48
  }, {
    "titulo": "American Loser (Trainwreck: My Life as an Idiot)",
    "contenido": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "id": 49
  }, {
    "titulo": "By the Gun",
    "contenido": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "id": 50
  }, {
    "titulo": "Conspiracy",
    "contenido": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "id": 51
  }, {
    "titulo": "Inglourious Basterds",
    "contenido": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "id": 52
  }, {
    "titulo": null,
    "contenido": null,
    "id": 53
  }, {
    "titulo": "Snake and Crane Arts of Shaolin (She hao ba bu)",
    "contenido": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "id": 54
  }, {
    "titulo": "You're a Big Boy Now",
    "contenido": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "id": 55
  }, {
    "titulo": "Idiots and Angels",
    "contenido": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "id": 56
  }, {
    "titulo": null,
    "contenido": null,
    "id": 57
  }, {
    "titulo": "Mannequin",
    "contenido": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "id": 58
  }, {
    "titulo": "Endurance: Shackleton's Legendary Antarctic Expedition, The",
    "contenido": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "id": 59
  }, {
    "titulo": "Drawn Together Movie: The Movie!, The",
    "contenido": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "id": 60
  }, {
    "titulo": "Female Yakuza Tale: Inquisition and Torture (Yasagure anego den: sôkatsu rinchi)",
    "contenido": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "id": 61
  }, {
    "titulo": "Earth Trembles, The (Terra trema: Episodio del mare, La)",
    "contenido": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "id": 62
  }, {
    "titulo": "Black Stallion Returns, The",
    "contenido": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "id": 63
  }, {
    "titulo": null,
    "contenido": null,
    "id": 64
  }, {
    "titulo": "Colpo in canna",
    "contenido": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "id": 65
  }, {
    "titulo": "Aurora",
    "contenido": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "id": 66
  }, {
    "titulo": "Hearts Divided",
    "contenido": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "id": 67
  }, {
    "titulo": "Hunting of the President, The",
    "contenido": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "id": 68
  }, {
    "titulo": null,
    "contenido": null,
    "id": 69
  }, {
    "titulo": "Rambo (Rambo 4)",
    "contenido": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "id": 70
  }, {
    "titulo": "Effi Briest (Fontane - Effi Briest)",
    "contenido": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "id": 71
  }, {
    "titulo": "Konopielka",
    "contenido": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "id": 72
  }, {
    "titulo": "Fados",
    "contenido": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "id": 73
  }, {
    "titulo": "Living Room of the Nation, The (Kansakunnan olohuone)",
    "contenido": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "id": 74
  }, {
    "titulo": "Swimsuit Issue, The (Allt flyter)",
    "contenido": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "id": 75
  }, {
    "titulo": null,
    "contenido": null,
    "id": 76
  }, {
    "titulo": null,
    "contenido": null,
    "id": 77
  }, {
    "titulo": "Dagon",
    "contenido": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "id": 78
  }, {
    "titulo": null,
    "contenido": null,
    "id": 79
  }, {
    "titulo": null,
    "contenido": null,
    "id": 80
  }, {
    "titulo": "High Test Girls",
    "contenido": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "id": 81
  }, {
    "titulo": "Beyond the Gates of Splendor",
    "contenido": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "id": 82
  }, {
    "titulo": "How She Move",
    "contenido": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "id": 83
  }, {
    "titulo": "Interceptor",
    "contenido": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "id": 84
  }, {
    "titulo": "Bridge Too Far, A",
    "contenido": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "id": 85
  }, {
    "titulo": "Ladybird Ladybird",
    "contenido": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "id": 86
  }, {
    "titulo": "Flywheel",
    "contenido": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "id": 87
  }, {
    "titulo": null,
    "contenido": null,
    "id": 88
  }, {
    "titulo": "👾 🙇 💁 🙅 🙆 🙋 🙎 🙍",
    "contenido": "In congue. Etiam justo. 👾 🙇 💁 🙅 🙆 🙋 🙎 🙍 pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "id": 89
  }, {
    "titulo": null,
    "contenido": null,
    "id": 90
  }, {
    "titulo": null,
    "contenido": null,
    "id": 91
  }, {
    "titulo": "Don't Bother to Knock",
    "contenido": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "id": 92
  }, {
    "titulo": "Eclipse, The",
    "contenido": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "id": 93
  }, {
    "titulo": "Swimming Pool",
    "contenido": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "id": 94
  }, {
    "titulo": null,
    "contenido": null,
    "id": 95
  }, {
    "titulo": "1'; DROP TABLE users--",
    "contenido": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "id": 96
  }, {
    "titulo": null,
    "contenido": null,
    "id": 97
  }, {
    "titulo": "Radio On",
    "contenido": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "id": 98
  }, {
    "titulo": "Anna",
    "contenido": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "id": 99
  }, {
    "titulo": "Kokowääh",
    "contenido": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "id": 100
  }]

//#endregion

//#region pool datos a-priori
const esc1 = {
    titulo: "Titulo pagina Escenario 1",
    contenidoPagina: "este es contenido para el escenerio 1",  
  };

  const esc2 = {
    titulo: " ",
    contenidoPagina: "este es contenido para el escenerio 2",  
  };

  const esc3 = {
    titulo: "",
    contenidoPagina: "este es contenido para el escenerio 3",  
  };

  const esc4 = {
    titulo: "Titulo pagina Escenario 4",
    contenidoPagina: "",  
  };

  const esc5 = {
    titulo: "Titulo pagina Escenario 5",
    contenidoPagina: null,  
  };

  const esc6 = {
    titulo: null,
    contenidoPagina: "contenido pagina Escenario 6",
  };

  const esc7 = {
    titulo: faker.lorem.sentence(3),
    contenidoPagina: faker.lorem.lines(10),
  };

  const esc8 = {
    titulo:   faker.random.alpha(255),
    contenidoPagina: faker.lorem.lines(10),
  };

  const esc9 = {
    titulo:   faker.random.alpha(256),
    contenidoPagina: faker.lorem.lines(1),
  };

  let dtaJsonEsc10=jsonDataPagina.find(x => x.id === 2);
  let dtaJsonEsc11=jsonDataPagina.find(x => x.id === 9);
  let dtaJsonEsc12=jsonDataPagina.find(x => x.id === 96);
  let dtaJsonEsc13=jsonDataPagina.find(x => x.id === 89);
const esc10={
  titulo:dtaJsonEsc10.titulo,
  contenidoPagina:dtaJsonEsc10.contenido
  
};

const esc11={
    titulo:dtaJsonEsc11.titulo,
    contenidoPagina:dtaJsonEsc11.contenido
    
  };

  const esc12={
    titulo:dtaJsonEsc12.titulo,
    contenidoPagina:dtaJsonEsc12.contenido
    
  };

  const esc13={
    titulo:dtaJsonEsc13.titulo,
    contenidoPagina:dtaJsonEsc13.contenido
    
  };

  let emailMemberTemp="juancho" + Math.floor(Math.random() * 1000) + "@email.com";
  const esc14={
    name: "Juan Carlo Medina Soraca",
     email:emailMemberTemp,
     note:"Datos nota para escenario 14"
    
  };

  const esc15={
    name: "Juan Carlos Fula Mendivelso",
     email:emailMemberTemp,
     note:"Datos nota para escenario 15"
    
  };

  const esc16={
    name: faker.name.findName(),
     email:faker.internet.email(),
     note:faker.lorem.sentence()
    
  };

  const esc17={
    name: faker.name.findName(),
     email:faker.internet.email(),
     note: faker.random.alpha(500)
   
  };

  const esc18={
    name: faker.name.findName(),
     email:faker.internet.email(),
     note: faker.random.alpha(501)
   
  };

  const esc19={
    name: "nombre apellidos",
     email:".mysite@mysite.org",
     note: "Nota para escenario 19"
   
  };

  const esc20={
    name: "Juan Pablo Esc 20",
     email:"",
     note: "Nota para escenario 20"
   
  };

  const esc21={
    name: "Neron Navarrete",
     email:emailMemberTemp,
     note: "Nota para escenario 21",
   label:"etiqueta_21"
  };


  const esc22={
    titulo:  "Titulo Post Youtube Esc22",
    contenidoPagina: "",
    url:"https://www.youtube.com/watch?v=AFD8wca2VTw"
  };

  const esc23={
    titulo:  "Titulo Post HTML Esc23",
    contenidoPagina: "",
    html:'<p><em><span style="text-decoration: underline;"><strong>hola mundo</strong></span> </em>escenario 23 test con <a href="https://www.cypress.io/">cypress</a></p>'
  }


  const esc24={
    titulo:  "Titulo Post Youtube Esc24",
    contenidoPagina: "",
    url:"malaURL"
  };




  const esc25={
    titulo:  "Titulo Post twitter Esc25",
    contenidoPagina: "",
    url:"https://twitter.com/elonmusk/status/1525612988115320838?cxt=HHwWjICw1b-7iKwqAAAA"
  };


  const esc26={
    titulo: faker.lorem.sentence(),
    contenidoPagina: "",
    //url:faker.internet.url()
    url:faker.image.nature()
  };



  const esc27={
    titulo: "MarkDown Esc27",
    contenidoPagina: "",
    //url:faker.internet.url()
    textoMarkDow:"I just love **bold text**."
  };


  const esc28={
    name: faker.name.findName(),
     email:faker.internet.email(),
     note: faker.lorem.words(5),
   label:null
  };


  const esc29={
    name: faker.name.findName(),
     email:faker.internet.email(),
     note: faker.lorem.words(5),
   label:faker.lorem.words(1)
  };

  const esc30={
    name: faker.name.findName(),
     email:faker.internet.email(),
     note: "",
   label:faker.lorem.words(1)
  };

//#endregion


//const rolesToCheck = ["Esc21","Esc30"];
  describe("Pruebas Datos Aleatorios", function () {

    // beforeEach(function() {

    //     const testName  = Cypress.mocha.getRunner().test.fullTitle();;
    //     if (!rolesToCheck.some(role => testName.includes(role))) {
    //         this.skip();
    //       }
    //   })
      
    

      


    const loginPage = new LoginPage();

  it("Esc1:Pool a-priori, Crear Página ", function () {
    loginValid();
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    cy.log("Data Esc1:" + JSON.stringify(esc1));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(esc1.titulo);
    pagesSection
      .getPageContent()
      .type(esc1.contenidoPagina, { force: true });
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    //cy.get("a").contains("View Page").click();
    
 
  });



  it("Esc2:Pool a-priori, Crear Página (titulo es espacio:' ') ", function () {
    loginValid();
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    cy.log("Data Esc2:" + JSON.stringify(esc2));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(esc2.titulo);
    pagesSection
      .getPageContent()
      .type(esc2.contenidoPagina, { force: true });
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    //cy.get("a").contains("View Page").click();
    
 
  });


  it("Esc3:Pool a-priori, Crear Página (sin titulo:'') ", function () {
    loginValid();
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    cy.log("Data Esc3:" + JSON.stringify(esc3));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });  
    cy.wait(2000);  
    pagesSection.setPageTitle2(esc3.titulo);
  });


  
  it("Esc4:Pool a-priori, Crear Página (sin contenido:'') ", function () {
    loginValid();
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    cy.log("Data Esc4:" + JSON.stringify(esc4));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });  
    cy.wait(2000); 
    let result=  pagesSection.setPageContent2(esc4.contenidoPagina);
  });
 
  it("Esc5:Pool a-priori, Crear Página (con contenido:null) ", function () {
    loginValid();
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    cy.log("Data Esc5:" + JSON.stringify(esc5));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });  
    cy.wait(2000); 
    let result=  pagesSection.setPageContent2(esc5.contenidoPagina);
  });

  
  it("Esc6:Pool a-priori, Crear Página (con titulo:null) - enfoque negativo ", function () {
    loginValid();
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    cy.log("Data Esc6:" + JSON.stringify(esc6));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });  
    cy.wait(2000);  
    pagesSection.setPageTitle2(esc6.titulo);
  
  });


  it("Esc7:Pool aleatorio dinamico (faker), Crear Página (faker) - enfoque positivo", function () {
    loginValid();

    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    cy.log("Data Esc7:" + JSON.stringify(esc7));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(esc7.titulo);
    pagesSection
      .getPageContent()
      .type(esc7.contenidoPagina, { force: true });
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    //cy.get("a").contains("View Page").click();
    
 
  });


  it("Esc8:Pool aleatorio dinamico (faker), Crear Página (titulo:255 caracteres -faker)", function () {
    loginValid();

    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    let titulo=esc8.titulo;
    let contenidoPagina=esc8.contenidoPagina;

    cy.log("Data Esc8:" + JSON.stringify(esc8));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(titulo);
    pagesSection
      .getPageContent()
      .type(contenidoPagina, { force: true });
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    //cy.get("a").contains("View Page").click();
    
 
  });

  it("Esc9:Pool aleatorio dinamico (faker), Crear Página (titulo:256 caracteres -faker) ", function () {
    loginValid();

    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    let titulo=esc9.titulo;
    let contenidoPagina=esc9.contenidoPagina;

    cy.log("Data Esc8:" + JSON.stringify(esc9));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(titulo);
    pagesSection
      .getPageContent()
      .type(contenidoPagina, { force: true });
    cy.wait(2000);
    pagesSection.getNOFirstPublishButton();
   
    //cy.get("a").contains("View Page").click();
    
 
  });


  it("Esc10:Pool a-priori psudoaleatorio, Crear Página (https://www.mockaroo.com-jsonDataFile) - enfoque positivo", function () {
    loginValid();

    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    let titulo=esc10.titulo;
    let contenidoPagina=esc10.contenidoPagina;

    cy.log("Data Esc8:" + JSON.stringify(esc10));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(titulo);
    pagesSection
      .getPageContent()
      .type(contenidoPagina, { force: true });
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    //cy.get("a").contains("View Page").click();
    
 
  });

  it("Esc11:Pool a-priori psudoaleatorio, Crear Página (titulo:(╯°□°）╯︵ ┻━┻) -https://www.mockaroo.com-jsonDataFile) - enfoque positivo", function () {
    loginValid();

    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    let titulo=esc11.titulo;
    let contenidoPagina=esc11.contenidoPagina;

    cy.log("Data Esc11:" + JSON.stringify(esc11));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(titulo);
    pagesSection
      .getPageContent()
      .type(contenidoPagina, { force: true });
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    //cy.get("a").contains("View Page").click();
    
 
  });


  it("Esc12:Pool a-priori psudoaleatorio, Crear Página (titulo:SQL inyection table -https://www.mockaroo.com-jsonDataFile) - enfoque positivo", function () {
    loginValid();

    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    let titulo=esc12.titulo;
    let contenidoPagina=esc12.contenidoPagina;

    cy.log("Data Esc12:" + JSON.stringify(esc12));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(titulo);
    pagesSection
      .getPageContent()
      .type(contenidoPagina, { force: true });
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    //cy.get("a").contains("View Page").click();
    
 
  });


    it("Esc13:Pool a-priori psudoaleatorio, Crear Página (titulo y contenido con :emoticon -https://www.mockaroo.com-jsonDataFile) - enfoque positivo", function () {
    loginValid();

    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    let titulo=esc13.titulo;
    let contenidoPagina=esc13.contenidoPagina;

    cy.log("Data Esc13:" + JSON.stringify(esc13));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(titulo);
    pagesSection
      .getPageContent()
      .type(contenidoPagina, { force: true });
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    //cy.get("a").contains("View Page").click();
    
 
  });


 

  it("Esc14:Pool a-priori, Crear Miembro", function () {
    loginValid();
    let name=esc14.name;
    let email=esc14.email;
    let note=esc14.note;
    cy.wait(3000);
    createNewMember(name, email, note,false,false,false);
    cy.wait(1000);
  });


  it("Esc15:Pool a-priori, Crear Miembro email duplicado ", function () {
    loginValid();
    cy.log("Data Esc15:" + JSON.stringify(esc15));
    let name=esc15.name;
    let email=esc15.email;
    let note=esc15.note;
    cy.wait(3000);
    createNewMember(name, email, note,true,false,false);
    cy.wait(1000);
  });

  
  it("Esc16:Pool aleatorio dinamico (faker) , Crear Miembro ", function () {
    loginValid();
    cy.log("Data Esc16:" + JSON.stringify(esc16));
    let name=esc16.name;
    let email=esc16.email;
    let note=esc16.note;
    cy.wait(3000);
    createNewMember(name, email, note,false,false,false);
    cy.wait(1000);
  });


  it("Esc17:Pool aleatorio dinamico (faker) , Crear Miembro, nota:500 caracteres ", function () {
    loginValid();
    cy.log("Data Esc17:" + JSON.stringify(esc17));
    let name=esc17.name;
    let email=esc17.email;
    let note=esc17.note;
    cy.wait(3000);
    createNewMember(name, email, note,false,false,false);
    cy.wait(1000);
  });


  it("Esc18:Pool aleatorio dinamico (faker) , Crear Miembro, nota > 500 caracteres ", function () {
    loginValid();
    cy.log("Data Esc18:" + JSON.stringify(esc18));
    let name=esc18.name;
    let email=esc18.email;
    let note=esc18.note;
    cy.wait(3000);
    createNewMember(name, email, note,false,true,false);
    cy.wait(1000);
  });

  it("Esc19:Pool a-priori , Crear Miembro. email invalido", function () {
    loginValid();
    cy.log("Data Esc19:" + JSON.stringify(esc19));
    let name=esc19.name;
    let email=esc19.email;
    let note=esc19.note;
    cy.wait(3000);
    createNewMember(name, email, note,false,false,true);
    cy.wait(1000);
  });

  it("Esc20:Pool a-priori , Crear Miembro. email vacio ", function () {
    loginValid();
    cy.log("Data Esc20:" + JSON.stringify(esc20));
    let name=esc20.name;
    let email=esc20.email;
    let note=esc20.note;
    cy.wait(3000);
    createNewMember(name, email, note,false,false,true);
    cy.wait(1000);
  });

  it("Esc21:Pool a-priori, Crear Miembro  con labels - ", function () {
    loginValid();
    cy.log("Data Esc21:" + JSON.stringify(esc21));
    let name=esc21.name;
    let email=esc21.email;
    let note=esc21.note;
    cy.wait(3000);
    createNewMember(name, email, note,false,false,false,esc21.label);
    cy.wait(1000);
  });



  it("Esc22:Pool a-priori, Crear Página YouTube ", function () {
    loginValid();
    cy.log("Data Esc22:" + JSON.stringify(esc22));
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    cy.log("Data Esc22:" + JSON.stringify(esc22));
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(esc22.titulo);
    
    pagesSection.getPageFormatProduct().click({ force: true });  
    cy.wait(1000);
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageYoutubeFormat().click({ force: true });  
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageYoutubeFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageYoutubeText().type(esc22.url);
  
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    
 
  });

  it("Esc23:Pool a-priori, Crear Página YouTube ", function () {
    loginValid();
    cy.log("Data Esc23:" + JSON.stringify(esc23));
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(esc23.titulo);
    
    pagesSection.getPageFormatProduct().click({ force: true });  
    cy.wait(1000);
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageHTMLFormat().click({ force: true });  
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageHTMLFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageHTMLText().type(esc23.html);
  
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    
 
  });

  it("Esc24:Pool a-priori, Crear Página YouTube (invalida url)", function () {
    loginValid();
    cy.log("Data Esc24:" + JSON.stringify(esc24));
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(esc24.titulo);
    
    pagesSection.getPageFormatProduct().click({ force: true });  
    cy.wait(1000);
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageYoutubeFormat().click({ force: true });  
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageYoutubeFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageYoutubeText().type(esc24.url);
  
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    pagesSection.getPageMessageUrlInvalid();
 
  });



  
  it("Esc25:Pool a-priori, Crear Pagina Twitter", function () {
    loginValid();
    cy.log("Data Esc25:" + JSON.stringify(esc25));
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(esc25.titulo);
    
    pagesSection.getPageFormatProduct().click({ force: true });  
    cy.wait(1000);
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageTwitterFormat().click({ force: true });  
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageTwitterFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageTwitterText().type(esc25.url);
  
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    
 
  });

  
  it("Esc26:Pool aleatorio dinamico (faker), Crear Página Button ", function () {
    loginValid();
    cy.log("Data Esc26:" + JSON.stringify(esc26));
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(esc26.titulo);
    
    pagesSection.getPageFormatProduct().click({ force: true });  
    cy.wait(1000);
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageButtonFormat().click({ timeOut: 2000 });
    pagesSection.getPagePostFormat().click({ force: true });  
    pagesSection.getPageButtonFormat().click({ timeOut: 1000 });
    pagesSection.getPageButtonText().type(faker.name.jobTitle());
    pagesSection.getPageButtonUrl().type(esc26.url);
    cy.wait(1000);

   
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    
 
  });


  it("Esc27:Pool a-priori, Crear Pagina MarkDond", function () {
    loginValid();
    cy.log("Data Esc27:" + JSON.stringify(esc27));
    const pagesSection = new PagesSection();
    cy.wait(2000);
   
    
    pagesSection.getPageMenu().click({ force: true });
  
    cy.wait(3000);
    pagesSection.getNewPageButton().click({ force: true });   
    pagesSection.getPageTitle().type(esc27.titulo);
    
    pagesSection.getPageFormatProduct().click({ force: true });  
    cy.wait(1000);
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageMarkdownFormat().click({ force: true });  
    pagesSection.getPagePostFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageMarkdownFormat().click({ force: true });  
    cy.wait(1000);

    pagesSection.getPageMarkdownText().type(esc27.textoMarkDow);
  
    cy.wait(2000);
    pagesSection.getFirstPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getSecondPublishButton().click({ force: true });
    cy.wait(2000);
    pagesSection.getThirdPublishButton().click({ force: true });
    
 
  });


  it("Esc28:Pool aleatorio dinamico (faker), Crear Miembro sin label y sin subcripcion", function () {
    loginValid();
    cy.log("Data Esc28:" + JSON.stringify(esc28));
    let name=esc28.name;
    let email=esc28.email;
    let note=esc28.note;
    cy.wait(3000);
    createNewMember(name, email, note,false,false,false,null,true);
    cy.wait(1000);
  });


  it("Esc29:Pool aleatorio dinamico (faker), Crear Miembro con label y sin subcripcion", function () {
    loginValid();
    cy.log("Data Esc29:" + JSON.stringify(esc29));
    let name=esc29.name;
    let email=esc29.email;
    let note=esc29.note;
    cy.wait(3000);
    createNewMember(name, email, note,false,false,false,esc29.label,true);
    cy.wait(1000);
  });


  it("Esc30:Pool aleatorio dinamico (faker), Crear Miembro sin nota , con label y sin subcripcion", function () {
    loginValid();
    cy.log("Data Esc30:" + JSON.stringify(esc30));
    let name=esc30.name;
    let email=esc30.email;
    let note="nota30";
    cy.wait(3000);
    createNewMember(name, email, note,false,false,false,esc30.label,true);
    cy.wait(1000);
  });


});




//There was an error when parsing the URL.

//it("Esc3: Pool a-priori - Actualizar perfil sin Email", function () {


//#region funciones propias


function loginValid() {
    cy.visit(`http://localhost:${port}/ghost/`);
    cy.wait(1000);
    loginPage.getEmail().type(userAdmin);
    loginPage.getPassword().type(userPassword);
    loginPage.getPassword().type("{enter}");
    loginPage.getLoginButton().click();
    cy.wait(2500);
  }
  

  function createNewMember(name, email, note,validateMensajeEMailDuplicado=false,validateMensajeExcedioCaracteresNota=false,validateMensajeEmailInvalido=false,label=null,activarSubcripcion=false) {
    const newMemberPage = new CreateMemberPage();
    cy.visit(`http://localhost:${port}/ghost/`);
   
    cy.wait(3000);
    newMemberPage.getMembersMenu().click({ force: true });
   
    cy.wait(3500);
    newMemberPage.getNewMemberButton().click({ force: true });
   
    cy.wait(500);
    newMemberPage.getNewMemberName().type(name, { force: true });
    
  
  
    newMemberPage.getNewMemberNote().type(note, {
      force: true,
    });

    let clicEnSave=true;
 
    if(label != null)
    {
        newMemberPage.getNewMemberLabel().type(label, {
            force: true,});

        cy.wait(4000);

        //newMemberPage.getNewLabelAddButon().click({ force: true });

        
    }
    
    cy.wait(1000);
   

    if(validateMensajeEMailDuplicado==true)
    {
        newMemberPage.getNewMemberSaveButton().click({ force: true });
        cy.wait(2000);
        newMemberPage.getExistMensajeEmailDuplicado();
        clicEnSave=false;
    }

    if(validateMensajeExcedioCaracteresNota==true)
    {
        newMemberPage.getNewMemberSaveButton().click({ force: true });
        cy.wait(2000);
        newMemberPage.getExistMensajeExcedioCaracteresNota();
        clicEnSave=false;
    }

    if(validateMensajeEmailInvalido==true)
    {   newMemberPage.getNewMemberSaveButton().click({ force: true });
        cy.wait(2000);
        newMemberPage.getExistMensajeMensajeInvalido();
        clicEnSave=false;
    }else{

        newMemberPage.getNewMemberEmail().type(email, { force: true });
    }

    if(activarSubcripcion==true)
    {
        newMemberPage.getNewLabelCheckSubscripcion().click({ force: true });;
    }

if(clicEnSave == true)
    newMemberPage.getNewMemberSaveButton().click({ force: true });
   // Note is too long.
  }
//#endregion