class countryname {
  public get countryData() {
    return $('//table[@id="countries"]//tr[3]//td[2]');
  }
  public async selectOne(data: string) {
    let ele = `//table/tbody/tr/td/strong[text()='${data}']/../../td[1]//input`;
    return $(ele);
  }

  public async multipleSelection() {
    let country_name = await this.countryData.getText();
    console.log("country name is", await this.countryData.getText());
    return country_name.toString();
  }
}
export default new countryname();
