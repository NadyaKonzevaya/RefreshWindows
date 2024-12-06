import { Wrapper, Title, Form, Sizes, Image, InputWrapper, SizeText, Input, Description, Configuration, OptionList, OptionItem, Select, ImageSmall, Label, Extras, ExtraWrap, ExtraLabel } from './Calculator.styled';
import window from '../../images/window.png';
import { Button } from '../Header/Header.styled';

export default function Calculator() {
    return (
        <Wrapper>
            <Title>Калькулятор</Title>
            <Form>
            <Sizes>
                    <Image src={window} alt="window" />
                    {/* <SizesWrapper> */}
                    <InputWrapper>
                        <Input type="number"></Input>
                        <SizeText>ширина, мм</SizeText>
                    </InputWrapper>
                    <InputWrapper>
                        <Input type="number"></Input>
                        <SizeText>высота, мм</SizeText>
                    </InputWrapper>
                   {/* </SizesWrapper> */}
                    <Button>Рассчитать</Button>
            </Sizes>
            <Description>
                    <Configuration>
                        <h2>Конфигурация</h2>
                        <OptionList>
                            <OptionItem>
                                <ImageSmall src={window} alt="window1" />
                                <input type="radio" name="size" id="1"/>
                                <Label htmlFor="1">Глухое окно</Label>
                            </OptionItem>
                            <OptionItem>
                                <ImageSmall src={window} alt="window1" />
                                <input type="radio" name="size" id="2"/>
                                <Label htmlFor="2">Окно с одной поворотно-откидной створкой                    </Label>
                            </OptionItem>
                            <OptionItem>
                                <ImageSmall src={window} alt="window1" />
                                <input type="radio" name="size" id="3" />
                                <Label htmlFor="3">Балконная рама с поворотной и поворотно-откидной створками
                                    </Label>
                            </OptionItem>
                            <OptionItem>
                                <ImageSmall src={window} alt="window1" />
                                <input type="radio" name="size" id="4"/>
                                <Label htmlFor="4">Т-образное окно с поворотно-откидной створкой
                                    </Label>   
                            </OptionItem>
                            <OptionItem>
                                <ImageSmall src={window} alt="window1" />
                                <input type="radio" name="size"  id="5"/>
                                <Label htmlFor="5">Одностворчатое окно с поворотно-откидной створкой
                                    </Label>
                            </OptionItem>
                            <OptionItem>
                                <ImageSmall src={window} alt="window1" />
                                <input type="radio" name="size" id="6"/>
                                <Label htmlFor="6">Двустворчатое окно с одной поворотной и одной поворотно-откидной створками
                                    </Label>
                            </OptionItem>
                            <OptionItem>
                                <ImageSmall src={window} alt="window1" />
                                <input type="radio" name="size" id="7" />
                                <Label htmlFor="7">Окно с одной поворотной и одной поворотно-откидной створками
                                    </Label>
                            </OptionItem>
                            <OptionItem>
                                <ImageSmall src={window} alt="window1" />
                                <input type="radio" name="size" id="8" />
                                <Label htmlFor="8">Балконная дверь с поворотно-откидной створкой
                                </Label>    
                            </OptionItem>
                        </OptionList>
                </Configuration>
                    <Extras>
                        <h2>Дополнительно:</h2>
                    <ExtraWrap>
                        <ExtraLabel for="steklopaket">Стеклопакет</ExtraLabel>
                        <Select id="steklopaket">
                            <option value="1">1-камерный</option>
                            <option value="2">2-камерный</option>
                        </Select>
                    </ExtraWrap>
                    <ExtraWrap>
                        <ExtraLabel for="profile">Профиль ПВХ</ExtraLabel>
                        <Select id="profile">
                            <option value="Rehau">Rehau</option>
                            <option value="Brusbox">BRUSBOX 70</option>
                        </Select>
                    </ExtraWrap>
                    <ExtraWrap>
                        <ExtraLabel for="otliv">Отлив</ExtraLabel>
                        <Select id="otliv">
                            <option value="none">Не учитывать в расчете</option>
                            <option value="100">100 мм</option>
                            <option value="150">150 мм</option>
                            <option value="200">200 мм</option>
                            <option value="250">250 мм</option>
                            <option value="300">300 мм</option>
                        </Select>
                    </ExtraWrap>
                    <ExtraWrap>
                        <ExtraLabel for="podokonnik">Подоконник</ExtraLabel>
                        <Select id="podokonnik">
                            <option value="none">Не учитывать в расчете</option>
                            <option value="100">100 мм</option>
                            <option value="150">150 мм</option>
                            <option value="200">200 мм</option>
                            <option value="250">250 мм</option>
                            <option value="300">300 мм</option>
                            <option value="350">350 мм</option>
                            <option value="400">400 мм</option>
                            <option value="450">450 мм</option>
                        </Select>
                    </ExtraWrap>
                    <ExtraWrap> 
                        <ExtraLabel for="otkos">Отделка откосов</ExtraLabel>
                        <Select id="otkos">
                            <option value="none">Не учитывать в расчете</option>
                            <option value="200">до 200 мм</option>
                            <option value="400">до 400 мм</option>
                            <option value="500">до 500 мм</option>
                            <option value="more">свыше 500 мм</option>
                        </Select>
                    </ExtraWrap>
                    <ExtraWrap>
                        <ExtraLabel for="montaz">Монтаж</ExtraLabel>
                        <Select id="montaz">
                            <option value="without">без монтажа</option>
                            <option value="with">с монтажом</option>
                        </Select>
                    </ExtraWrap>
                </Extras>
                <Button>Рассчитать</Button>
            </Description>
                
            </Form>
        </Wrapper>
    )
}